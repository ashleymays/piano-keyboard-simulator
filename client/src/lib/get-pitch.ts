import type { PianoKey } from '~/features/piano-keys/slice';

export const getPitch = (pianoKey: PianoKey) => {
  return `${pianoKey.note}${pianoKey.octave}`;
};
