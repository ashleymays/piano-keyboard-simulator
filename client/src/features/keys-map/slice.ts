import { createSlice } from '@reduxjs/toolkit';

export type PianoKey = {
  id: string;
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
  { id: 'q', note: 'C', octave: 3, type: 'natural' },
  { id: '2', note: 'Db', octave: 3, type: 'flat' },
  { id: 'w', note: 'D', octave: 3, type: 'natural' },
  { id: '3', note: 'Eb', octave: 3, type: 'flat' },
  { id: 'e', note: 'E', octave: 3, type: 'natural' },
  { id: 'r', note: 'F', octave: 3, type: 'natural' },
  { id: '5', note: 'Gb', octave: 3, type: 'flat' },
  { id: 't', note: 'G', octave: 3, type: 'natural' },
  { id: '6', note: 'Ab', octave: 3, type: 'flat' },
  { id: 'y', note: 'A', octave: 3, type: 'natural' },
  { id: '7', note: 'Bb', octave: 3, type: 'flat' },
  { id: 'u', note: 'B', octave: 3, type: 'natural' },
  { id: 'i', note: 'C', octave: 4, type: 'natural' },
  { id: '9', note: 'Db', octave: 4, type: 'flat' },
  { id: 'o', note: 'D', octave: 4, type: 'natural' },
  { id: '0', note: 'Eb', octave: 4, type: 'flat' },
  { id: 'p', note: 'E', octave: 4, type: 'natural' },
  { id: '[', note: 'F', octave: 4, type: 'natural' },
  { id: '=', note: 'Gb', octave: 4, type: 'flat' },
  { id: ']', note: 'G', octave: 4, type: 'natural' },
  { id: 'a', note: 'Ab', octave: 4, type: 'flat' },
  { id: 'z', note: 'A', octave: 4, type: 'natural' },
  { id: 's', note: 'Bb', octave: 4, type: 'flat' },
  { id: 'x', note: 'B', octave: 4, type: 'natural' },
  { id: 'c', note: 'C', octave: 5, type: 'natural' },
  { id: 'f', note: 'Db', octave: 5, type: 'flat' },
  { id: 'v', note: 'D', octave: 5, type: 'natural' },
  { id: 'g', note: 'Eb', octave: 5, type: 'flat' },
  { id: 'b', note: 'E', octave: 5, type: 'natural' },
  { id: 'n', note: 'F', octave: 5, type: 'natural' },
  { id: 'j', note: 'Gb', octave: 5, type: 'flat' },
  { id: 'm', note: 'G', octave: 5, type: 'natural' },
  { id: 'k', note: 'Ab', octave: 5, type: 'flat' },
  { id: ',', note: 'A', octave: 5, type: 'natural' },
  { id: 'l', note: 'Bb', octave: 5, type: 'flat' },
  { id: '.', note: 'B', octave: 5, type: 'natural' }
];

const shiftOctave = (keysMap: KeysMap, incrementValue: number) => {
  keysMap.forEach((pianoKey) => {
    pianoKey.octave += incrementValue;
  });
};

const shiftOctaveUp = (keysMap: KeysMap) => {
  shiftOctave(keysMap, 1);
};

const shiftOctaveDown = (keysMap: KeysMap) => {
  shiftOctave(keysMap, -1);
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
