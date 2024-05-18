import { create } from 'zustand';
import { getHigherKeys, getLowerKeys } from './helpers';
import type { KeysMap } from '~/types/keys-map';

const keys = {
  map: new Map([
    ['q', { note: 'C', octave: 3, type: 'natural' }],
    ['2', { note: 'Db', octave: 3, type: 'flat' }],
    ['w', { note: 'D', octave: 3, type: 'natural' }],
    ['3', { note: 'Eb', octave: 3, type: 'flat' }],
    ['e', { note: 'E', octave: 3, type: 'natural' }],
    ['r', { note: 'F', octave: 3, type: 'natural' }],
    ['5', { note: 'Gb', octave: 3, type: 'flat' }],
    ['t', { note: 'G', octave: 3, type: 'natural' }],
    ['6', { note: 'Ab', octave: 3, type: 'flat' }],
    ['y', { note: 'A', octave: 3, type: 'natural' }],
    ['7', { note: 'Bb', octave: 3, type: 'flat' }],
    ['u', { note: 'B', octave: 3, type: 'natural' }],
    ['i', { note: 'C', octave: 4, type: 'natural' }],
    ['9', { note: 'Db', octave: 4, type: 'flat' }],
    ['o', { note: 'D', octave: 4, type: 'natural' }],
    ['0', { note: 'Eb', octave: 4, type: 'flat' }],
    ['p', { note: 'E', octave: 4, type: 'natural' }],
    ['[', { note: 'F', octave: 4, type: 'natural' }],
    ['=', { note: 'Gb', octave: 4, type: 'flat' }],
    [']', { note: 'G', octave: 4, type: 'natural' }],
    ['a', { note: 'Ab', octave: 4, type: 'flat' }],
    ['z', { note: 'A', octave: 4, type: 'natural' }],
    ['s', { note: 'Bb', octave: 4, type: 'flat' }],
    ['x', { note: 'B', octave: 4, type: 'natural' }],
    ['c', { note: 'C', octave: 5, type: 'natural' }],
    ['f', { note: 'Db', octave: 5, type: 'flat' }],
    ['v', { note: 'D', octave: 5, type: 'natural' }],
    ['g', { note: 'Eb', octave: 5, type: 'flat' }],
    ['b', { note: 'E', octave: 5, type: 'natural' }],
    ['n', { note: 'F', octave: 5, type: 'natural' }],
    ['j', { note: 'Gb', octave: 5, type: 'flat' }],
    ['m', { note: 'G', octave: 5, type: 'natural' }],
    ['k', { note: 'Ab', octave: 5, type: 'flat' }],
    [',', { note: 'A', octave: 5, type: 'natural' }],
    ['l', { note: 'Bb', octave: 5, type: 'flat' }],
    ['.', { note: 'B', octave: 5, type: 'natural' }]
  ]) satisfies KeysMap
};

export type KeysMapState = {
  keys: {
    map: KeysMap;
  };
  actions: {
    raiseOctave: () => void;
    lowerOctave: () => void;
  }
};

const useKeysMapStore = create<KeysMapState>((set) => ({
  keys,
  actions: {
    raiseOctave: () => set((state) => ({ keys: { map: getHigherKeys(state) } })),
    lowerOctave: () => set((state) => ({ keys: { map: getLowerKeys(state) } }))
  }
}));

export const useKeysMap = () => {
  return useKeysMapStore((state) => state.keys.map);
}

export const useOctaves = () => {
  return useKeysMapStore((state) => state.actions);
}