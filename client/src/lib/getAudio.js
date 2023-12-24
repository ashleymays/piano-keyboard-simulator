import axios from 'axios';
import decodeAudio from 'audio-decode';

export default async function getInstrumentAudio(instrument) {
  const audioFiles = await getAudioFiles(instrument);
  const audio = await getAudioObject(audioFiles);
  return audio;
}

async function getAudioFiles(instrument) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/audio/${instrument}`;
  const response = await axios.get(url);
  return response.data;
}

async function getAudioObject(audioFiles) {
  const audioBuffers = await getAudioBuffers(audioFiles);
  const audioFileNames = Object.keys(audioFiles);
  const audioObject = {};
  let pitch;

  audioFileNames.forEach((fileName, index) => {
    pitch = getPitchFromFileName(fileName);
    audioObject[pitch] = audioBuffers[index];
  });

  return audioObject;
}

async function getAudioBuffers(audioFiles) {
  const undecodedAudioFiles = await getUndecodedAudioFiles(audioFiles);
  const arrayBuffers = await getArrayBuffers(undecodedAudioFiles);

  const getAudioBufferPromise = (i) => {
    const arrayBuffer = arrayBuffers[i];
    return decodeAudio(arrayBuffer);
  };

  return resolvePromisesConcurrently({
    asyncFn: getAudioBufferPromise,
    numberOfPromises: arrayBuffers.length
  });
}

function getUndecodedAudioFiles(audioFiles) {
  const base64AudioList = Object.values(audioFiles);

  const getUndecodedAudioFilesPromise = (i) => {
    const base64Audio = base64AudioList[i];
    const base64String = `data:application/octet;base64,${base64Audio}`;
    return fetch(base64String);
  };

  return resolvePromisesConcurrently({
    asyncFn: getUndecodedAudioFilesPromise,
    numberOfPromises: base64AudioList.length
  });
}

function getArrayBuffers(undecodedAudioFiles) {
  const getArrayBuffersPromise = (i) => {
    const undecodedAudioFile = undecodedAudioFiles[i];
    return undecodedAudioFile.arrayBuffer();
  };

  return resolvePromisesConcurrently({
    asyncFn: getArrayBuffersPromise,
    numberOfPromises: undecodedAudioFiles.length
  });
}

function resolvePromisesConcurrently({ asyncFn, numberOfPromises }) {
  const promises = [];

  for (let i = 0; i < numberOfPromises; ++i) {
    promises.push(asyncFn(i));
  }

  return Promise.all(promises);
}

function getPitchFromFileName(fileName) {
  const fileExtension = '.mp3';
  return fileName.slice(0, fileName.length - fileExtension.length);
}
