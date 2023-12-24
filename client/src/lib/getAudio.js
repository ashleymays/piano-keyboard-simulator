import axios from 'axios';
import decodeAudio from 'audio-decode';

export async function getInstrumentAudioBuffers(instrument) {
  const audioFiles = await getAudioFiles(instrument);
  const audioBuffers = getAudioBuffers(audioFiles);
  const updatedAudioBuffers = updateAudioBufferKeys(audioBuffers);
  console.log(updatedAudioBuffers);
  return updatedAudioBuffers;
}

async function getAudioFiles(instrument) {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/audio/${instrument}`;
  const response = await axios.get(url);
  return response.data;
}

function getAudioBuffers(audioFiles) {
  let blob;
  let url;
  for (let i in audioFiles) {
    blob = new Blob([audioFiles[i].data]);
    url = URL.createObjectURL(blob, 'audio/mp3');
    audioFiles[i] = url;
  }
  return audioFiles;
}

// async function getAudioBuffers(audioFiles) {
//   let undecodedAudioFiles = [];
//   let arrayBuffers = [];
//   let audioBuffers = [];
//   let base64String;
//   let undecodedAudio;
//   let arrayBuffer;

//   for (let i in audioFiles) {
//     base64String = `data:application/octet;base64,${audioFiles[i]}`;
//     undecodedAudioFiles.push(fetch(base64String));
//   }

//   undecodedAudioFiles = await Promise.all(undecodedAudioFiles);

//   for (let i in undecodedAudioFiles) {
//     undecodedAudio = undecodedAudioFiles[i];
//     arrayBuffers.push(undecodedAudio.arrayBuffer());
//   }

//   arrayBuffers = await Promise.all(arrayBuffers);

//   for (let i in arrayBuffers) {
//     arrayBuffer = arrayBuffers[i];
//     audioBuffers.push(decodeAudio(arrayBuffer));
//   }

//   return Promise.all(audioBuffers);
// }

function updateAudioBufferKeys(audioBuffers) {
  const audioFileNames = Object.keys(audioBuffers);
  const updatedAudioBuffers = {};
  let pitch;

  audioFileNames.forEach((fileName) => {
    pitch = getPitchFromFileName(fileName);
    updatedAudioBuffers[pitch] = audioBuffers[fileName];
  });

  return updatedAudioBuffers;
}

function getPitchFromFileName(fileName) {
  const fileExtension = '.mp3';
  return fileName.slice(0, fileName.length - fileExtension.length);
}
