import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import {
  raiseOctave,
  lowerOctave,
  type PianoKey,
  type KeysMap
} from '~/features/keys-map';
import type { RootState, AppDispatch } from '~/features/store';

const getPitch = (pianoKey: PianoKey) => {
  const { note, octave } = pianoKey;

  return `${note}${octave}`;
};

const getOctaveRange = (keysMap: KeysMap) => {
  const lowestPitch = getPitch(keysMap[0]);
  const highestPitch = getPitch(keysMap[keysMap.length - 1]);

  return `Note Range: ${lowestPitch} - ${highestPitch}`;
};

export const useOctaveButtons = () => {
  const keysMap = useSelector((state: RootState) => state.keysMap);
  const dispatch = useDispatch<AppDispatch>();

  const handleRaiseOctave = () => {
    dispatch(raiseOctave());
    toast(getOctaveRange(keysMap));
  };

  const handleLowerOctave = () => {
    dispatch(lowerOctave());
    toast(getOctaveRange(keysMap));
  };

  return [handleRaiseOctave, handleLowerOctave];
};
