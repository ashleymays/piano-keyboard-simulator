import { toast } from 'react-hot-toast';
import { useAppSelector, useAppDispatch } from '~/store/hooks';
import { incrementOctave, decrementOctave } from '~/store/piano-keys';
import { useMountedEffect } from './use-mounted-effect';
import type { PianoKey } from '~/store/piano-keys';

/**
 * The behavior of the octave buttons.
 *
 * Incrementing raises the pitches of the notes by one octave, and
 * decrementing lowers the pitches of the notes by one octave.
 *
 * With either action, a notification is displayed to show the user
 * the new octave range of the piano keys.
 *
 * @hook
 */
export const useOctaveButtons = () => {
  const pianoKeys = useAppSelector((state) => state.pianoKeys);
  const dispatch = useAppDispatch();

  const getPitch = (pianoKey: PianoKey) => {
    return `${pianoKey.note}${pianoKey.octave}`;
  };

  const increment = () => {
    dispatch(incrementOctave());
  };

  const decrement = () => {
    dispatch(decrementOctave());
  };

  useMountedEffect(
    () => {
      const showOctaveRange = () => {
        const lowestKey = pianoKeys[0];
        const highestKey = pianoKeys[pianoKeys.length - 1];

        const octaveRange = `${getPitch(lowestKey)} - ${getPitch(highestKey)}`;

        toast(`Note Range: ${octaveRange}`);
      };

      showOctaveRange();
    },
    pianoKeys.map((pianoKey) => pianoKey.octave)
  );

  return { increment, decrement };
};
