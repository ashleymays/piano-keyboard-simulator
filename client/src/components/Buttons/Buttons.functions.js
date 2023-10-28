import axios from 'axios';

export async function getInstrumentAudioBuffers(instrument) {
    try {
        const audioFiles = await getInstrumentAudioFiles(instrument);
        const audioBuffers = await getAudioBuffersFromAudioFiles(audioFiles);
        return audioBuffers;
    } catch (error) {
        throw error;
    }
}

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

async function getAudioBuffersFromAudioFiles(audioFiles) {
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

function getPitchFromFileName(audioFileName) {
    const FILE_EXTENSION = '.mp3';
    return audioFileName.slice(0, audioFileName.length - FILE_EXTENSION.length);
}
