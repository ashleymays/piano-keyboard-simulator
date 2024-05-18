import type { KeysMapState } from './store';
import type { KeysMap } from '~/types/keys-map';

const HIGHEST_KEY = '.';
const HIGHEST_OCTAVE = 7;

const LOWEST_KEY = 'q';
const LOWEST_OCTAVE = 1;

export const getHigherKeys = (state: KeysMapState) => {
  const updatedKeysMap = new Map(state.keys.map);
  const highestPianoKey = updatedKeysMap.get(HIGHEST_KEY);

  if (highestPianoKey && highestPianoKey.octave !== HIGHEST_OCTAVE) {
    shiftOctave(updatedKeysMap, 1);
  }

  return updatedKeysMap;
};

export const getLowerKeys = (state: KeysMapState) => {
  const updatedKeysMap = new Map(state.keys.map);
  const lowestPianoKey = updatedKeysMap.get(LOWEST_KEY);

  if (lowestPianoKey && lowestPianoKey.octave !== LOWEST_OCTAVE) {
    shiftOctave(updatedKeysMap, -1);
  }

  return updatedKeysMap;
};

const shiftOctave = (updatedKeysMap: KeysMap, incrementValue: number) => {
  updatedKeysMap.forEach((pianoKey) => {
    pianoKey.octave += incrementValue;
  });
};
