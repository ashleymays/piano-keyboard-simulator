import axios from 'axios';
import decodeAudio from 'audio-decode';

/**
 * Fetches audio from the server and converts the audio to audio buffer format.
 *
 * @async
 * @param { string } instrumentDirectory The name of the folder where the instrument's audio is stored.
 * @returns { object | undefined }
 */
export default async function getInstrumentAudio(instrumentDirectory) {
  try {
    const audioFiles = await getAudioFiles(instrumentDirectory);
    return await getAudioObject(audioFiles);
  } catch (error) {
    return error;
  }
}

/**
 * Fetches the audio files from the server.
 *
 * @param { string } instrumentDirectory The name of the folder that contains the instrument's audio files.
 * @returns { Promise<object> }
 */
async function getAudioFiles(instrumentDirectory) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/audio/${instrumentDirectory}`;
  const response = await axios.get(url);
  return response.data;
}

/**
 * Maps a note pitch to the corresponding audio buffer.
 *
 * @async
 * @param { object } audioFiles The audio files fetched from the server.
 * @returns { object }
 */
async function getAudioObject(audioFiles) {
  try {
    const audioBuffers = await getAudioBuffers(audioFiles);
    const pitches = Object.keys(audioFiles);
    const audioObject = {};

    pitches.forEach((pitch, index) => {
      audioObject[pitch] = audioBuffers[index];
    });

    return audioObject;
  } catch (error) {
    throw error;
  }
}

/**
 * Converts base64 audio to usable audio buffers.
 * The base64 files are first converted to array buffers.
 * The array buffers are then converted to audio buffers.
 *
 * @async
 * @param { object } audioFiles The audio files fetched from the server.
 * @returns { Promise<Array<AudioBuffer>> | undefined }
 */
async function getAudioBuffers(audioFiles) {
  try {
    const base64AudioSnippets = Object.values(audioFiles);
    const numberOfAudioFiles = base64AudioSnippets.length;

    const base64AudioFiles = await getBase64FilesFromSnippets(
      base64AudioSnippets,
      numberOfAudioFiles
    );

    const arrayBuffers = await getArrayBuffersFromBase64Files(
      base64AudioFiles,
      numberOfAudioFiles
    );

    return getAudioBuffersFromArrayBuffers(arrayBuffers, numberOfAudioFiles);
  } catch (error) {
    throw error;
  }
}

/**
 * Converts the base64 audio from the server into a list of base64 files.
 *
 * @param { object } base64AudioSnippets The list of base64 snippets for each note pitch. It is fetched from the server.
 * @param { number } numberOfAudioFiles
 * @returns { Promise<Array<object>> }
 */
function getBase64FilesFromSnippets(base64AudioSnippets, numberOfAudioFiles) {
  const getBase64Files = (i) => {
    const base64AudioSnippet = base64AudioSnippets[i];
    const base64AudioUrl = `data:application/octet;base64,${base64AudioSnippet}`;
    return fetch(base64AudioUrl);
  };

  return getAsyncFunctionArrayAsPromise(getBase64Files, numberOfAudioFiles);
}

/**
 * Converts base64 files to array buffers.
 *
 * @param { Array<object> } base64AudioFiles The list of base64 audio files that will be converted to array buffers.
 * @param { number } numberOfAudioFiles
 * @returns { Promise<Array<ArrayBuffer>> }
 */
function getArrayBuffersFromBase64Files(base64AudioFiles, numberOfAudioFiles) {
  const getArrayBuffers = (i) => {
    const base64AudioFile = base64AudioFiles[i];
    return base64AudioFile.arrayBuffer();
  };

  return getAsyncFunctionArrayAsPromise(getArrayBuffers, numberOfAudioFiles);
}

/**
 * Converts array buffers to audio buffers.
 *
 * @param { Array<ArrayBuffer> } arrayBuffers A list of array buffers.
 * @param { number } numberOfAudioFiles
 * @returns { Promise<Array<AudioBuffer>> }
 */
function getAudioBuffersFromArrayBuffers(arrayBuffers, numberOfAudioFiles) {
  const getAudioBuffer = (i) => {
    const arrayBuffer = arrayBuffers[i];
    return decodeAudio(arrayBuffer);
  };

  return getAsyncFunctionArrayAsPromise(getAudioBuffer, numberOfAudioFiles);
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
