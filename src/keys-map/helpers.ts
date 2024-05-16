import type { KeysMapState } from './store';
import type { KeysMap } from '~/types/keys-map';

const HIGHEST_KEY = '.';
const LOWEST_KEY = 'q';

const HIGHEST_OCTAVE = 7;
const LOWEST_OCTAVE = 1;

export const raiseOctave = (state: KeysMapState) => {
  const updatedKeysMap = new Map(state.initialState.keysMap);
  const highestPianoKey = updatedKeysMap.get(HIGHEST_KEY);

  if (!highestPianoKey) {
    return updatedKeysMap;
  }

  if (highestPianoKey.octave !== HIGHEST_OCTAVE) {
    shiftOctave(updatedKeysMap, 1);
  }

  return updatedKeysMap;
};

export const lowerOctave = (state: KeysMapState) => {
  const updatedKeysMap = new Map(state.initialState.keysMap);
  const lowestPianoKey = updatedKeysMap.get(LOWEST_KEY);

  if (!lowestPianoKey) {
    return updatedKeysMap;
  }

  if (lowestPianoKey.octave !== LOWEST_OCTAVE) {
    shiftOctave(updatedKeysMap, -1);
  }

  return updatedKeysMap;
};

const shiftOctave = (updatedKeysMap: KeysMap, incrementValue: number) => {
  console.log(`updating keys: ${incrementValue}`);
  updatedKeysMap.forEach((pianoKey) => {
    pianoKey.octave += incrementValue;
  });
};
