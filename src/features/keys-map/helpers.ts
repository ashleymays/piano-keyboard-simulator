import type { KeysMap } from './types';

export const raiseOctaves = (keysMap: KeysMap) => {
  const HIGHEST_KEY = '.';
  const HIGHEST_OCTAVE = 7;

  const highestPianoKey = keysMap[HIGHEST_KEY];

  if (highestPianoKey && highestPianoKey.octave !== HIGHEST_OCTAVE) {
    return getHigherKeys(keysMap);
  }

  return keysMap;
};

const getHigherKeys = (keysMap: KeysMap) => {
  return getShiftedKeys(keysMap, 1);
};

export const lowerOctaves = (keysMap: KeysMap) => {
  const LOWEST_KEY = 'q';
  const LOWEST_OCTAVE = 1;

  const lowestPianoKey = keysMap[LOWEST_KEY];

  if (lowestPianoKey && lowestPianoKey.octave !== LOWEST_OCTAVE) {
    return getLowerKeys(keysMap);
  }

  return keysMap;
};

const getLowerKeys = (keysMap: KeysMap) => {
  return getShiftedKeys(keysMap, -1);
};

const getShiftedKeys = (keysMap: KeysMap, incrementValue: number) => {
  const newKeysMap = new Map(keysMap);

  Object.values(newKeysMap).forEach((pianoKey) => {
    pianoKey.octave += incrementValue;
  });

  return newKeysMap;
};