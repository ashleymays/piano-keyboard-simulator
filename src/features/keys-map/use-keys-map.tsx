import { useSelector, useDispatch } from 'react-redux';
import { raiseOctave, lowerOctave } from './slice';
import type { RootState } from '../store';

export const useKeysMap = () => {
  const keysMap = useSelector((state: RootState) => state.keysMap);
  const dispatch = useDispatch();

  const handleRaiseOctave = () => {
    dispatch(raiseOctave());
  };

  const handleLowerOctave = () => {
    dispatch(lowerOctave());
  };

  return {
    keysMap,
    raiseOctave: handleRaiseOctave,
    lowerOctave: handleLowerOctave
  };
};
