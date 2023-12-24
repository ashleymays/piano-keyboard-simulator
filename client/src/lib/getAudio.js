import axios from 'axios';
import decodeAudio from 'audio-decode';

export default async function getInstrumentAudio(instrumentDirectory) {
  try {
    const audioFiles = await getAudioFiles(instrumentDirectory);
    return await getAudioObject(audioFiles);
  } catch (error) {
    return error;
  }
}

/**
 * Fetches the audio files from the server and returns the response.
 * If resolved, it returns an object with the note pitches as properties and base64 strings as values.
 * If rejected, it returns an object with message as a property and a string error message as a value.
 *
 * @param { string } instrumentDirectory The name of the folder that contains the instrument's audio files.
 * @returns { Promise<Object> }
 */
async function getAudioFiles(instrumentDirectory) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/audio/${instrumentDirectory}`;
  const response = await axios.get(url);
  return response.data;
}

/**
 * @async
 * @param { Object } audioFiles The audio files fetched from the server.
 * @returns { Object } Maps a note pitch to the corresponding audio buffer.
 */
async function getAudioObject(audioFiles) {
  const audioBuffers = await getAudioBuffers(audioFiles);
  const pitches = Object.keys(audioFiles);
  const audioObject = {};

  pitches.forEach((pitch, index) => {
    audioObject[pitch] = audioBuffers[index];
  });

  return audioObject;
}

/**
 * Converts base64 audio to usable audio buffers.
 * The base64 files are first converted to array buffers.
 * The array buffers are then converted to audio buffers.
 *
 * @async
 * @param { Object } audioFiles The audio files fetched from the server.
 * @returns { Promise }
 */
async function getAudioBuffers(audioFiles) {
  const numberOfAudioFiles = Object.keys(audioFiles).length;
  const base64AudioSnippets = Object.values(audioFiles);

  const base64AudioFiles = await convertBase64SnippetsToFiles(
    base64AudioSnippets,
    numberOfAudioFiles
  );

  const arrayBuffers = await convertBase64FilesToArrayBuffers(
    base64AudioFiles,
    numberOfAudioFiles
  );

  const audioBuffers = convertArrayBuffersToAudioBuffers(
    arrayBuffers,
    numberOfAudioFiles
  );

  return audioBuffers;
}

/**
 * Converts the base64 audio from the server into a list of base64 files.
 *
 * @param { Object } base64AudioSnippets The list of base64 snippets for each note pitch. It is fetched from the server.
 * @param { number } numberOfAudioFiles
 * @return { Promise }
 */
function convertBase64SnippetsToFiles(base64AudioSnippets, numberOfAudioFiles) {
  const getBase64FilesPromise = (i) => {
    const base64AudioSnippet = base64AudioSnippets[i];
    const dataUrl = `data:application/octet;base64,${base64AudioSnippet}`;
    return fetch(dataUrl);
  };

  return getAsyncFunctionArrayAsPromise(
    getBase64FilesPromise,
    numberOfAudioFiles
  );
}

/**
 * Converts base64 files to array buffers.
 * @param { Array } base64AudioFiles The list of base64 audio files that will be converted to array buffers.
 * @param { number } numberOfAudioFiles
 * @returns { Promise }
 */
function convertBase64FilesToArrayBuffers(
  base64AudioFiles,
  numberOfAudioFiles
) {
  const getArrayBuffersPromise = (i) => {
    const base64AudioFile = base64AudioFiles[i];
    return base64AudioFile.arrayBuffer();
  };

  return getAsyncFunctionArrayAsPromise(
    getArrayBuffersPromise,
    numberOfAudioFiles
  );
}

/**
 * Converts array buffers to audio buffers.
 *
 * @param { Object } arrayBuffers A list of array buffers.
 * @param { number } numberOfAudioFiles
 * @returns { Promise }
 */
function convertArrayBuffersToAudioBuffers(arrayBuffers, numberOfAudioFiles) {
  const getAudioBufferPromise = (i) => {
    const arrayBuffer = arrayBuffers[i];
    return decodeAudio(arrayBuffer);
  };

  return getAsyncFunctionArrayAsPromise(
    getAudioBufferPromise,
    numberOfAudioFiles
  );
}

/**
 * Creates an array of promises and returns all of them as one promise.
 * The returned promise resolves when all promises in the array are resolved.
 *
 * @param { function } asyncFn A function that returns a promise.
 * @param { number } numberOfPromises The number of promises in the array
 * @returns { Promise }
 */
function getAsyncFunctionArrayAsPromise(asyncFn, numberOfPromises) {
  const promises = [];

  for (let i = 0; i < numberOfPromises; ++i) {
    promises.push(asyncFn(i));
  }

  return Promise.all(promises);
}
