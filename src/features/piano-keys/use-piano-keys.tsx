import { useSelector, useDispatch } from 'react-redux';
import { raiseOctave, lowerOctave } from './slice';
import type { RootState } from '../store';

export const usePianoKeys = () => {
  const pianoKeys = useSelector((state: RootState) => state.pianoKeys);
  const dispatch = useDispatch();

  const handleRaiseOctave = () => {
    dispatch(raiseOctave());
  };

  const handleLowerOctave = () => {
    dispatch(lowerOctave());
  };

  return {
    pianoKeys,
    raiseOctave: handleRaiseOctave,
    lowerOctave: handleLowerOctave
  };
};
