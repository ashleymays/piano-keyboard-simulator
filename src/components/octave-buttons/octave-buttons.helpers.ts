/* eslint no-param-reassign: 0 */
import {
  keysMap,
  HIGHEST_OCTAVE,
  HIGHEST_KEY,
  LOWEST_OCTAVE,
  LOWEST_KEY
} from '~/keys-map';

export const raiseOctave = () => {
  const highestPianoKey = keysMap.get(HIGHEST_KEY);

  /** @TODO Should either log or raise an error in this case. */
  if (!highestPianoKey) {
    return;
  }

  if (highestPianoKey.octave !== HIGHEST_OCTAVE) {
    shiftOctave(1);
  }
};

export const lowerOctave = () => {
  const lowestPianoKey = keysMap.get(LOWEST_KEY);

  /** @TODO Should either log or raise an error in this case. */
  if (!lowestPianoKey) {
    return;
  }

  if (lowestPianoKey.octave !== LOWEST_OCTAVE) {
    shiftOctave(-1);
  }
};

const shiftOctave = (incrementValue: number) => {
  keysMap.forEach((pianoKey) => {
    pianoKey.octave += incrementValue;
  });
};
