import { useAppDispatch } from '~/features/store';
import { incrementOctave, decrementOctave } from '~/features/keys-map';

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
