import type { PianoKey } from '~/store/piano-keys/slice';

export const getPitch = (pianoKey: PianoKey) => {
  return `${pianoKey.note}${pianoKey.octave}`;
};
