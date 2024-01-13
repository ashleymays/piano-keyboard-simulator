import { ToneAudioBuffers } from 'tone';

export async function getInstrumentNotes(directory) {
    const urls = getUrlList(directory);
    return await new ToneAudioBuffers(urls);
}

function getUrlList(directory) {
    const notes = [ 'A', 'Ab', 'B', 'Bb', 'C', 'D', 'Db', 'E', 'Eb', 'F', 'G', 'Gb' ];
    const octaves = [ 1, 2, 3, 4, 5, 6, 7 ];
    const urls = {};

    let pitch;

    for (let note of notes) {
        for (let octave of octaves) {
            pitch = `${note}${octave}`;
            urls[pitch] = `~/audio/${directory}/${pitch}.mp3`;
        }
    }

    return urls;
}