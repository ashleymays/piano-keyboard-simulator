import pianoKeys from '../../data/pianoKeys';

export function handleOctaveUp() {
    if (canRaiseOctave()) {
        const INCREMENT_VALUE = 1;
        updateOctaves(INCREMENT_VALUE);
    }
}

export function handleOctaveDown() {
    if (canLowerOctave()) {
        const INCREMENT_VALUE = -1;
        updateOctaves(INCREMENT_VALUE);
    }
}

function canRaiseOctave() {
    const HIGHEST_OCTAVE = 7;
    const highestPianoKey = pianoKeys[pianoKeys.length - 1];
    return highestPianoKey.octave < HIGHEST_OCTAVE;
}

function canLowerOctave() {
    const LOWEST_OCTAVE = 1;
    const lowestPianoKey = pianoKeys[0];
    return lowestPianoKey.octave > LOWEST_OCTAVE;
}

function updateOctaves(INCREMENT_VALUE) {
    pianoKeys.forEach((pianoKey) => {
        pianoKey.octave += INCREMENT_VALUE;
    });
}
