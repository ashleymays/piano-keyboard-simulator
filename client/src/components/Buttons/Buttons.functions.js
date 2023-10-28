import axios from 'axios';

/**
 * Get the audio for the selected instrument.
 * @param { string }
 * @returns { Object }
 */
export async function getInstrumentAudioBuffers(instrument) {
    try {
        const audioFiles = await getInstrumentAudioFiles(instrument);
        const audioBuffers = await getArrayBufferFromAudioFiles(audioFiles);
        return audioBuffers;
    } catch (error) {
        throw error;
    }
}

/**
 * Fetch the audio for an instrument from the server in Base 64 format.
 * @param { string }
 * @returns { Object }
 */
async function getInstrumentAudioFiles(instrument) {
    try {
        const URL = '/audio';
        const METHOD = 'post';
        const response = await axios({
            url: URL,
            method: METHOD,
            headers: new Headers({
                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }),
            data: {
                instrument: instrument
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

/**
 * Get the audio for the selected instrument as an object of ArrayBuffer.
 * @param { Object }
 * @returns { Object }
 */
async function getArrayBufferFromAudioFiles(audioFiles) {
    try {
        const audioBuffers = {};
        let base64String;
        let base64AudioData;
        let audioData;
        let pitch;

        for (let audioFileName in audioFiles) {
            base64AudioData = audioFiles[audioFileName];
            base64String = `data:application/octet;base64,${base64AudioData}`;
            audioData = await convertBase64ToArrayBuffer(base64String);
            pitch = getPitchFromFileName(audioFileName);
            audioBuffers[pitch] = audioData;
        }
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
async function convertBase64ToArrayBuffer(base64String) {
    try {
        const audioContext = new AudioContext();
        let undecodedAudio = await fetch(base64String);
        let undecodedAudioBuffer = await undecodedAudio.arrayBuffer();
        const decodedAudioData = await audioContext.decodeAudioData(undecodedAudioBuffer);
        audioContext.close();
        return decodedAudioData;
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
