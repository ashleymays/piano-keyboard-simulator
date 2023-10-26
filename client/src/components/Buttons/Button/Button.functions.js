import axios from 'axios';

export async function getInstrumentAudio(instrument) {
    try {
        const audioFiles = await getInstrumentAudioFiles(instrument);
        const audioBuffers = getAudioBuffersFromAudioFiles(audioFiles);
        return audioBuffers;
    } catch (error) {
        throw error;
    }
}

async function getInstrumentAudioFiles(instrument) {
    console.log('get instrument audio');
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
    console.log(response.data);
    return response.data;
}

function getAudioBuffersFromAudioFiles(audioFiles) {
    const audioBuffers = [];

    for (let audioFileName in audioFiles) {
        convertBase64ToArrayBuffer(audioFiles, audioFileName);
    }
    return audioBuffers;
}

function convertBase64ToArrayBuffer(audioFiles, audioFileName) {
    let undecodedAudio;
    let pitch;

    const request = new XMLHttpRequest();
    const base64String = `data:application/octet;base64,${audioFiles[audioFileName]}`;
    request.open('GET', base64String);
    request.responseType = 'arraybuffer';
    request.onload = () => {
        undecodedAudio = request.response;
        audioContext.decodeAudioData(undecodedAudio, (audioFileData) => {
            pitch = getPitchFromFileName(audioFileName);
            audioBuffers[pitch] = audioFileData;
        });
    };
    request.send();
}

function getPitchFromFileName(audioFileName) {
    const FILE_EXTENSION = '.mp3';
    return audioFileName.slice(0, audioFileName.length - FILE_EXTENSION.length);
}
