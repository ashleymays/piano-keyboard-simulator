import { useAppDispatch } from '~/features/store';
import { raiseOctave, lowerOctave } from '~/features/keys-map';

export const useOctaves = () => {
  const dispatch = useAppDispatch();

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
