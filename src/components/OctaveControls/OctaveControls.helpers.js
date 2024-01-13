import { pianoKeys } from '~/constants';

/**
 * Increases the octave number of each note if allowed.
 */
export function handleOctaveUp() {
  if (canRaiseOctave()) {
    const INCREMENT_VALUE = 1;
    updateOctaves(INCREMENT_VALUE);
  }
}

/**
 * Decreases the octave number of each note if allowed.
 */
export function handleOctaveDown() {
  if (canLowerOctave()) {
    const INCREMENT_VALUE = -1;
    updateOctaves(INCREMENT_VALUE);
  }
}

/**
 * Returns true if the octave number can be incremented by one.
 * @return { boolean }
 */
function canRaiseOctave() {
  const HIGHEST_OCTAVE = 7;
  const highestPianoKey = pianoKeys.get('.');
  return highestPianoKey.octave < HIGHEST_OCTAVE;
}

/**
 * Returns true if the octave number can be decremented by one.
 * @return { boolean }
 */
function canLowerOctave() {
  const LOWEST_OCTAVE = 1;
  const lowestPianoKey = pianoKeys.get('q');
  return lowestPianoKey.octave > LOWEST_OCTAVE;
}

/**
 * Changes the octave number on all notes
 * according to the given value.
 * @param { number } value
 */
function updateOctaves(value) {
  pianoKeys.forEach((pianoKey) => {
    pianoKey.octave += value;
  });
}
