import { keysMap } from '~/common/keys-map';

export function shiftOctaveUp() {
  if (canRaiseOctave()) {
    incrementOctave();
  }
}

export function shiftOctaveDown() {
  if (canLowerOctave()) {
    decrementOctave();
  }
}

function canRaiseOctave() {
  const HIGHEST_OCTAVE = 7;
  const highestPianoKey = keysMap.get('.');
  return highestPianoKey.octave < HIGHEST_OCTAVE;
}

function canLowerOctave() {
  const LOWEST_OCTAVE = 1;
  const lowestPianoKey = keysMap.get('q');
  return lowestPianoKey.octave > LOWEST_OCTAVE;
}

function incrementOctave() {
  const INCREMENT_VALUE = 1;
  updateOctaves(INCREMENT_VALUE);
}

function decrementOctave() {
  const INCREMENT_VALUE = -1;
  updateOctaves(INCREMENT_VALUE);
}

function updateOctaves(incrementValue) {
  keysMap.forEach((pianoKey) => {
    pianoKey.octave += incrementValue;
  });
}
