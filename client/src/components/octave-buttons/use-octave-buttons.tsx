import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { raiseOctave, lowerOctave, type PianoKey } from '~/features/keys-map';
import type { RootState, AppDispatch } from '~/features/store';

export const useOctaveButtons = () => {
  const keysMap = useSelector((state: RootState) => state.keysMap);
  const dispatch = useDispatch<AppDispatch>();

  const handleRaiseOctave = () => {
    dispatch(raiseOctave());
  };

  const handleLowerOctave = () => {
    dispatch(lowerOctave());
  };

  const showOctaveRange = () => {
    const lowestPitch = getPitch(keysMap[0]);
    const highestPitch = getPitch(keysMap[keysMap.length - 1]);

    toast(`Note Range: ${lowestPitch} - ${highestPitch}`);
  };

  useEffect(() => {
    showOctaveRange();
  }, [keysMap]);

  return [handleRaiseOctave, handleLowerOctave];
};

const getPitch = (pianoKey: PianoKey) => {
  const { note, octave } = pianoKey;

  return `${note}${octave}`;
};
