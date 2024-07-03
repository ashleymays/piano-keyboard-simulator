import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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
  isPressed: boolean;
};

export type PianoKeys = PianoKey[];

const initialState: PianoKeys = [
  { id: 'q', note: 'C', octave: 3, type: 'natural', isPressed: false },
  { id: '2', note: 'Db', octave: 3, type: 'flat', isPressed: false },
  { id: 'w', note: 'D', octave: 3, type: 'natural', isPressed: false },
  { id: '3', note: 'Eb', octave: 3, type: 'flat', isPressed: false },
  { id: 'e', note: 'E', octave: 3, type: 'natural', isPressed: false },
  { id: 'r', note: 'F', octave: 3, type: 'natural', isPressed: false },
  { id: '5', note: 'Gb', octave: 3, type: 'flat', isPressed: false },
  { id: 't', note: 'G', octave: 3, type: 'natural', isPressed: false },
  { id: '6', note: 'Ab', octave: 3, type: 'flat', isPressed: false },
  { id: 'y', note: 'A', octave: 3, type: 'natural', isPressed: false },
  { id: '7', note: 'Bb', octave: 3, type: 'flat', isPressed: false },
  { id: 'u', note: 'B', octave: 3, type: 'natural', isPressed: false },
  { id: 'i', note: 'C', octave: 4, type: 'natural', isPressed: false },
  { id: '9', note: 'Db', octave: 4, type: 'flat', isPressed: false },
  { id: 'o', note: 'D', octave: 4, type: 'natural', isPressed: false },
  { id: '0', note: 'Eb', octave: 4, type: 'flat', isPressed: false },
  { id: 'p', note: 'E', octave: 4, type: 'natural', isPressed: false },
  { id: '[', note: 'F', octave: 4, type: 'natural', isPressed: false },
  { id: '=', note: 'Gb', octave: 4, type: 'flat', isPressed: false },
  { id: ']', note: 'G', octave: 4, type: 'natural', isPressed: false },
  { id: 'a', note: 'Ab', octave: 4, type: 'flat', isPressed: false },
  { id: 'z', note: 'A', octave: 4, type: 'natural', isPressed: false },
  { id: 's', note: 'Bb', octave: 4, type: 'flat', isPressed: false },
  { id: 'x', note: 'B', octave: 4, type: 'natural', isPressed: false },
  { id: 'c', note: 'C', octave: 5, type: 'natural', isPressed: false },
  { id: 'f', note: 'Db', octave: 5, type: 'flat', isPressed: false },
  { id: 'v', note: 'D', octave: 5, type: 'natural', isPressed: false },
  { id: 'g', note: 'Eb', octave: 5, type: 'flat', isPressed: false },
  { id: 'b', note: 'E', octave: 5, type: 'natural', isPressed: false },
  { id: 'n', note: 'F', octave: 5, type: 'natural', isPressed: false },
  { id: 'j', note: 'Gb', octave: 5, type: 'flat', isPressed: false },
  { id: 'm', note: 'G', octave: 5, type: 'natural', isPressed: false },
  { id: 'k', note: 'Ab', octave: 5, type: 'flat', isPressed: false },
  { id: ',', note: 'A', octave: 5, type: 'natural', isPressed: false },
  { id: 'l', note: 'Bb', octave: 5, type: 'flat', isPressed: false },
  { id: '.', note: 'B', octave: 5, type: 'natural', isPressed: false }
];

const shiftOctave = (pianoKeys: PianoKeys, incrementValue: number) => {
  pianoKeys.forEach((pianoKey) => {
    pianoKey.octave += incrementValue;
  });
};

const shiftOctaveUp = (pianoKeys: PianoKeys) => {
  shiftOctave(pianoKeys, 1);
};

const shiftOctaveDown = (pianoKeys: PianoKeys) => {
  shiftOctave(pianoKeys, -1);
};

const slice = createSlice({
  name: 'pianoKeys',
  initialState,
  reducers: {
    incrementOctave(pianoKeys: PianoKeys) {
      const HIGHEST_POSSIBLE_OCTAVE = 7;
      const highestPianoKey = pianoKeys[pianoKeys.length - 1];

      if (highestPianoKey.octave < HIGHEST_POSSIBLE_OCTAVE) {
        shiftOctaveUp(pianoKeys);
      }
    },

    decrementOctave(pianoKeys: PianoKeys) {
      const LOWEST_POSSIBLE_OCTAVE = 1;
      const lowestPianoKey = pianoKeys[0];

      if (lowestPianoKey.octave > LOWEST_POSSIBLE_OCTAVE) {
        shiftOctaveDown(pianoKeys);
      }
    },

    toggleKeyPress(
      pianoKeys: PianoKeys,
      action: PayloadAction<PianoKey['id']>
    ) {
      const pianoKey = pianoKeys.find((key) => key.id === action.payload);

      if (pianoKey) {
        pianoKey.isPressed = !pianoKey.isPressed;
      }
    }
  }
});

export const { incrementOctave, decrementOctave, toggleKeyPress } =
  slice.actions;

export const reducer = slice.reducer;
