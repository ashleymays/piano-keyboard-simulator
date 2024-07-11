import { describe, it, expect } from 'vitest';
import { incrementOctave, decrementOctave } from '~/store/piano-keys';
import { setupStore } from '~/store';

describe('piano keys - octaves', () => {
  it('should increment octaves', () => {
    const store = setupStore();

    const { pianoKeys: originalPianoKeys } = store.getState();

    store.dispatch(incrementOctave());

    const { pianoKeys: newPianoKeys } = store.getState();

    expect(originalPianoKeys.length).toEqual(newPianoKeys.length);

    for (let i = 0; i < originalPianoKeys.length; ++i) {
      const originalPianoKey = originalPianoKeys[i];
      const newPianoKey = newPianoKeys[i];

      expect(newPianoKey.octave).toEqual(originalPianoKey.octave + 1);
    }
  });

  it('should decrement octaves', async () => {
    const store = setupStore();

    const { pianoKeys: originalPianoKeys } = store.getState();

    store.dispatch(decrementOctave());

    const { pianoKeys: newPianoKeys } = store.getState();

    expect(originalPianoKeys.length).toEqual(newPianoKeys.length);

    for (let i = 0; i < originalPianoKeys.length; ++i) {
      const originalPianoKey = originalPianoKeys[i];
      const newPianoKey = newPianoKeys[i];

      expect(newPianoKey.octave).toEqual(originalPianoKey.octave - 1);
    }
  });
});
