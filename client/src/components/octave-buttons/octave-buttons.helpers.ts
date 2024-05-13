/* eslint no-param-reassign: 0 */
import {
  keysMap,
  HIGHEST_OCTAVE,
  HIGHEST_KEY,
  LOWEST_OCTAVE,
  LOWEST_KEY
} from '~/keys-map';

export const raiseOctave = () => {
  if (!isAtHighestOctave()) {
    shiftOctave(1);
  }
};

export const lowerOctave = () => {
  if (!isAtLowestOctave()) {
    shiftOctave(-1);
  }
};

const isAtHighestOctave = () => {
  const highestPianoKey = keysMap.get(HIGHEST_KEY);
  return highestPianoKey?.octave === HIGHEST_OCTAVE;
};

const isAtLowestOctave = () => {
  const lowestPianoKey = keysMap.get(LOWEST_KEY);
  return lowestPianoKey?.octave === LOWEST_OCTAVE;
};

const shiftOctave = (incrementValue: number) => {
  keysMap.forEach((pianoKey) => {
    pianoKey.octave += incrementValue;
  });
};
