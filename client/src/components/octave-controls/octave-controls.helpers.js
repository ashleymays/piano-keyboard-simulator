/* eslint no-param-reassign: 0 */
import { keysMap } from '~/common/keys-map';

/**
 * Increments the octave of all piano keys by one.
 * Allows the user to play notes at the next octave up.
 */
export function shiftOctaveUp() {
  if (canRaiseOctave()) {
    const INCREMENT_VALUE = 1;
    updateOctaves(INCREMENT_VALUE);
  }
}

/**
 * Decrements the octave of all piano keys by one.
 * Allows the user to play notes at the next octave down.
 */
export function shiftOctaveDown() {
  if (canLowerOctave()) {
    const INCREMENT_VALUE = -1;
    updateOctaves(INCREMENT_VALUE);
  }
}

/**
 * Returns true if it is possible to increase
 * the octave of every piano key by one.
 *
 * @returns {boolean}
 */
function canRaiseOctave() {
  const HIGHEST_OCTAVE = 7;
  const highestPianoKey = keysMap.get('.');
  return highestPianoKey.octave < HIGHEST_OCTAVE;
}

/**
 * Returns true if it is possible to decrease
 * the octave of every piano key by one.
 *
 * @returns {boolean}
 */
function canLowerOctave() {
  const LOWEST_OCTAVE = 1;
  const lowestPianoKey = keysMap.get('q');
  return lowestPianoKey.octave > LOWEST_OCTAVE;
}

/**
 * Shifts the octave for each piano key either up or down
 * by the specified number of steps.
 *
 * @param {number} incrementValue
 */
function updateOctaves(incrementValue) {
  keysMap.forEach((pianoKey) => {
    pianoKey.octave += incrementValue;
  });
}
