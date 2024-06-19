import { createSlice } from '@reduxjs/toolkit';

export type PianoKey = {
  computerKey: string;
  note:
    | 'C'
    | 'Db'
    | 'D'
    | 'Eb'
    | 'E'
    | 'F'
    | 'Gb'
    | 'G'
    | 'Ab'
    | 'A'
    | 'Bb'
    | 'B';
  octave: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  type: 'natural' | 'flat';
};

export type KeysMap = PianoKey[];

const initialState: KeysMap = [
  { computerKey: 'q', note: 'C', octave: 3, type: 'natural' },
  { computerKey: '2', note: 'Db', octave: 3, type: 'flat' },
  { computerKey: 'w', note: 'D', octave: 3, type: 'natural' },
  { computerKey: '3', note: 'Eb', octave: 3, type: 'flat' },
  { computerKey: 'e', note: 'E', octave: 3, type: 'natural' },
  { computerKey: 'r', note: 'F', octave: 3, type: 'natural' },
  { computerKey: '5', note: 'Gb', octave: 3, type: 'flat' },
  { computerKey: 't', note: 'G', octave: 3, type: 'natural' },
  { computerKey: '6', note: 'Ab', octave: 3, type: 'flat' },
  { computerKey: 'y', note: 'A', octave: 3, type: 'natural' },
  { computerKey: '7', note: 'Bb', octave: 3, type: 'flat' },
  { computerKey: 'u', note: 'B', octave: 3, type: 'natural' },
  { computerKey: 'i', note: 'C', octave: 4, type: 'natural' },
  { computerKey: '9', note: 'Db', octave: 4, type: 'flat' },
  { computerKey: 'o', note: 'D', octave: 4, type: 'natural' },
  { computerKey: '0', note: 'Eb', octave: 4, type: 'flat' },
  { computerKey: 'p', note: 'E', octave: 4, type: 'natural' },
  { computerKey: '[', note: 'F', octave: 4, type: 'natural' },
  { computerKey: '=', note: 'Gb', octave: 4, type: 'flat' },
  { computerKey: ']', note: 'G', octave: 4, type: 'natural' },
  { computerKey: 'a', note: 'Ab', octave: 4, type: 'flat' },
  { computerKey: 'z', note: 'A', octave: 4, type: 'natural' },
  { computerKey: 's', note: 'Bb', octave: 4, type: 'flat' },
  { computerKey: 'x', note: 'B', octave: 4, type: 'natural' },
  { computerKey: 'c', note: 'C', octave: 5, type: 'natural' },
  { computerKey: 'f', note: 'Db', octave: 5, type: 'flat' },
  { computerKey: 'v', note: 'D', octave: 5, type: 'natural' },
  { computerKey: 'g', note: 'Eb', octave: 5, type: 'flat' },
  { computerKey: 'b', note: 'E', octave: 5, type: 'natural' },
  { computerKey: 'n', note: 'F', octave: 5, type: 'natural' },
  { computerKey: 'j', note: 'Gb', octave: 5, type: 'flat' },
  { computerKey: 'm', note: 'G', octave: 5, type: 'natural' },
  { computerKey: 'k', note: 'Ab', octave: 5, type: 'flat' },
  { computerKey: ',', note: 'A', octave: 5, type: 'natural' },
  { computerKey: 'l', note: 'Bb', octave: 5, type: 'flat' },
  { computerKey: '.', note: 'B', octave: 5, type: 'natural' }
];

const shiftOctave = (keysMap: KeysMap, incrementValue: number) => {
  keysMap.forEach((pianoKey) => {
    pianoKey.octave += incrementValue;
  });
};

const shiftOctaveUp = (keysMap: KeysMap) => {
  return shiftOctave(keysMap, 1);
};

const shiftOctaveDown = (keysMap: KeysMap) => {
  return shiftOctave(keysMap, -1);
};

const slice = createSlice({
  name: 'keysMap',
  initialState,
  reducers: {
    raiseOctave(keysMap: KeysMap) {
      const HIGHEST_POSSIBLE_OCTAVE = 7;
      const highestPianoKey = keysMap[keysMap.length - 1];

      if (highestPianoKey.octave < HIGHEST_POSSIBLE_OCTAVE) {
        shiftOctaveUp(keysMap);
      }
    },

    lowerOctave(keysMap: KeysMap) {
      const LOWEST_POSSIBLE_OCTAVE = 1;
      const lowestPianoKey = keysMap[0];

      if (lowestPianoKey.octave > LOWEST_POSSIBLE_OCTAVE) {
        shiftOctaveDown(keysMap);
      }
    }
  }
});

export const { raiseOctave, lowerOctave } = slice.actions;

export const reducer = slice.reducer;
