import axios from 'axios';

/**
 * Get the audio for the selected instrument.
 * @param { string }
 * @returns { Object }
 */
export async function getInstrumentAudioBuffers(instrument) {
  try {
    const audioFiles = await getInstrumentAudioFiles(instrument);
    return await getArrayBufferFromAudioFiles(audioFiles);
  } catch (error) {
    throw error;
  }
}

/**
 * Fetch the audio for an instrument from the server in Base 64 format.
 * @param { string } instrument the name of the directory for the instrument's audio files
 * @returns { Object }
 */
async function getInstrumentAudioFiles(instrument) {
  try {
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

/**
 * Get the audio for the selected instrument as an object of ArrayBuffers.
 * @param { Object } audioFiles
 * @returns { Object }
 */
async function getArrayBufferFromAudioFiles(audioFiles) {
  try {
    const audioContext = new AudioContext();
    const audioBuffers = {};
    let base64String;
    let base64AudioData;
    let audioData;
    let pitch;

    for (let audioFileName in audioFiles) {
      base64AudioData = audioFiles[audioFileName];
      base64String = `data:application/octet;base64,variables.${base64AudioData}`;
      audioData = await convertBase64ToArrayBuffer(base64String, audioContext);
      pitch = getPitchFromFileName(audioFileName);
      audioBuffers[pitch] = audioData;
    }

    audioContext.close();
    return audioBuffers;
  } catch (error) {
    throw error;
  }
}

/**
 * Converts a base 64 string to an array buffer.
 * @param { string }
 * @returns { ArrayBuffer }
 */
async function convertBase64ToArrayBuffer(base64String, audioContext) {
  try {
    let undecodedAudio = await fetch(base64String);
    let undecodedAudioBuffer = await undecodedAudio.arrayBuffer();
    return await audioContext.decodeAudioData(undecodedAudioBuffer);
  } catch (error) {
    throw error;
  }
}

/**
 * Pitch is the name of the audio file without the file extension (.mp3)
 * @param { string }
 * @returns { string }
 */
function getPitchFromFileName(audioFileName) {
  const FILE_EXTENSION = '.mp3';
  return audioFileName.slice(0, audioFileName.length - FILE_EXTENSION.length);
}
