import type { KeysMap } from '~/types/keys-map';

const HIGHEST_KEY = '.';
const LOWEST_KEY = 'q';

const HIGHEST_OCTAVE = 7;
const LOWEST_OCTAVE = 1;

export const raiseOctaveKeys = (state: KeysMap) => {
  const highestPianoKey = state[HIGHEST_KEY];

  if (!highestPianoKey) {
    return;
  }

  if (highestPianoKey.octave !== HIGHEST_OCTAVE) {
    shiftOctave(state, 1);
  }
};

export const lowerOctaveKeys = (state: KeysMap) => {
  const lowestPianoKey = state[LOWEST_KEY];

  if (!lowestPianoKey) {
    return;
  }

  if (lowestPianoKey.octave !== LOWEST_OCTAVE) {
    shiftOctave(state, -1);
  }
};

const shiftOctave = (state: KeysMap, incrementValue: number) => {
  Object.values(state).forEach((pianoKey) => {
    pianoKey.octave += incrementValue;
  });
};
