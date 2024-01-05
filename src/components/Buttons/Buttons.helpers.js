import * as Tone from 'tone'

export default async function getInstrumentNotes(directory) {
    const samplesMap = getSamplesMap(directory);
    return await new Tone.ToneAudioBuffers(samplesMap);
}

function getSamplesMap(directory) {
    const notes = ['A', 'Ab', 'B', 'Bb', 'C', 'D', 'Db', 'E', 'Eb', 'F', 'G', 'Gb'];
    const octaves = [1, 2, 3, 4, 5, 6, 7 ];
    const map = {};

    let pitch;

    for (let note of notes) {
        for (let octave of octaves) {
            pitch = `${note}${octave}`;
            map[pitch] = `~/audio/${directory}/${pitch}.mp3`;
        }
    }

    return map;
}