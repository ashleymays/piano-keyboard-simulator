import { useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { useAppSelector, useAppDispatch } from '~/features/hooks';
import { incrementOctave, decrementOctave } from '~/features/piano-keys';
import { getPitch } from '~/lib/get-pitch';

export const useOctaveButtons = () => {
  const hasEnteredPageBefore = useRef(false);
  const pianoKeys = useAppSelector((state) => state.pianoKeys);
  const dispatch = useAppDispatch();

  const showOctaveRange = () => {
    toast(`Note Range: ${getOctaveRange()}`);
  };

  const getOctaveRange = () => {
    const lowestKey = pianoKeys[0];
    const highestKey = pianoKeys[pianoKeys.length - 1];

    return `${getPitch(lowestKey)} - ${getPitch(highestKey)}`;
  };

  const increment = () => {
    dispatch(incrementOctave());
  };

  const decrement = () => {
    dispatch(decrementOctave());
  };

  useEffect(() => {
    if (hasEnteredPageBefore.current) {
      showOctaveRange();
    }
    hasEnteredPageBefore.current = true;
  }, [pianoKeys]);

  return { increment, decrement };
};
