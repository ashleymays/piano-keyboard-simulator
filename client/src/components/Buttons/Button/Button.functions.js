import axios from 'axios';

export async function getInstrumentAudio(instrument) {
    console.log('get instrument audio');
    const URL = '/audio';
    const METHOD = 'post';
    const audio = await axios({
        url: URL,
        method: METHOD,
        headers: new Headers({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }),
        data: {
            instrument: instrument
        }
    });
    return audio;
}
