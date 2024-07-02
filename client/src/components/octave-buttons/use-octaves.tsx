import { useAppDispatch } from '~/features/hooks';
import { incrementOctave, decrementOctave } from '~/features/piano-keys';

export const useOctaves = () => {
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(incrementOctave());
  };

  const decrement = () => {
    dispatch(decrementOctave());
  };

  return { increment, decrement };
};
