import { useDispatch } from 'react-redux';
import { raiseOctave, lowerOctave } from '~/features/keys-map';
import type { AppDispatch } from '~/features/store';

export const useOctaveButtons = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRaiseOctave = () => {
    dispatch(raiseOctave());
  };

  const handleLowerOctave = () => {
    dispatch(lowerOctave());
  };

  return {
    raiseOctave: handleRaiseOctave,
    lowerOctave: handleLowerOctave
  };
};
