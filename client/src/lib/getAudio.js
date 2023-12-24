import axios from 'axios';
import decodeAudio from 'audio-decode';

export async function getInstrumentAudioBuffers(instrument) {
  try {
    const audioFiles = await getAudioFiles(instrument);
    getAudioBuffers(audioFiles);
    return {};
    // return await getAudioBuffers(audioFiles);
  } catch (error) {
    throw error;
  }
}

async function getAudioFiles(instrument) {
  try {
    console.log(`${process.env.REACT_APP_SERVER_BASE_URL}/audio/${instrument}`);
    const response = await axios({
      url: `${process.env.REACT_APP_SERVER_BASE_URL}/audio/${instrument}`,
      method: 'get',
      headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getAudioBuffers(files) {
  console.log(files);
}

function getPitchFromFileName(fileName) {
  const fileExtension = '.mp3';
  return fileName.slice(0, fileName.length - fileExtension.length);
}

async function resolvePromises(promises) {
  try {
    return await Promise.all(promises);
  } catch (error) {
    throw error;
  }
}
