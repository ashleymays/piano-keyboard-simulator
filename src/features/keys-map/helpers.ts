import type { KeysMap } from './types';

/**
 * Raises the octave for each key.
 *
 * Simulates moving hands to the right on a piano keyboard.
 *
 * @param keysMap
 * @returns A new copy of the keys map with the octave for each note raised by one.
 */
export const raiseOctave = (keysMap: KeysMap) => {
  const HIGHEST_KEY = '.';
  const HIGHEST_OCTAVE = 7;

  const highestPianoKey = keysMap.get(HIGHEST_KEY);

  if (highestPianoKey && highestPianoKey.octave !== HIGHEST_OCTAVE) {
    return getHigherKeys(keysMap);
  }

  return keysMap;
};

const getHigherKeys = (keysMap: KeysMap) => {
  return getShiftedKeys(keysMap, 1);
};

/**
 * Lowers the octaves for each key.
 *
 * Simulates moving hands to the left on a piano keyboard.
 *
 * @param keysMap
 * @returns A new copy of the keys map with the octave for each note lowered by one.
 */
export const lowerOctave = (keysMap: KeysMap) => {
  const LOWEST_KEY = 'q';
  const LOWEST_OCTAVE = 1;

  const lowestPianoKey = keysMap.get(LOWEST_KEY);

  if (lowestPianoKey && lowestPianoKey.octave !== LOWEST_OCTAVE) {
    return getLowerKeys(keysMap);
  }

  return keysMap;
};

const getLowerKeys = (keysMap: KeysMap) => {
  return getShiftedKeys(keysMap, -1);
};

const getShiftedKeys = (keysMap: KeysMap, incrementValue: number) => {
  const newKeysMap: KeysMap = new Map(keysMap);

  Object.values(newKeysMap).forEach((pianoKey) => {
    pianoKey.octave += incrementValue;
  });

  return newKeysMap;
};
