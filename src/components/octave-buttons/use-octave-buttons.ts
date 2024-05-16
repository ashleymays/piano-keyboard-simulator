import { useDispatch } from 'react-redux';
import { raiseOctave, lowerOctave } from '~/keys-map/slice';

export const useOctaveButtons = () => {
  const dispatch = useDispatch();

  const raiseOctaveKeys = () => {
    dispatch(raiseOctave());
  };

  const lowerOctaveKeys = () => {
    dispatch(lowerOctave());
  };

  return [raiseOctaveKeys, lowerOctaveKeys];
};
