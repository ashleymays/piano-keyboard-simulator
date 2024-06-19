import { toast } from 'react-hot-toast';
import {
  usePianoKeys,
  type PianoKey,
  type PianoKeys
} from '~/features/piano-keys';

const getPitch = (pianoKey: PianoKey) => {
  const { note, octave } = pianoKey;

  return `${note}${octave}`;
};

const getOctaveRange = (pianoKeys: PianoKeys) => {
  const lowestPitch = getPitch(pianoKeys[0]);
  const highestPitch = getPitch(pianoKeys[pianoKeys.length - 1]);

  return `Note Range: ${lowestPitch} - ${highestPitch}`;
};

export const useOctaveButtons = () => {
  const { pianoKeys, raiseOctave, lowerOctave } = usePianoKeys();

  const handleRaiseOctave = () => {
    raiseOctave();
    toast(getOctaveRange(pianoKeys));
  };

  const handleLowerOctave = () => {
    lowerOctave();
    toast(getOctaveRange(pianoKeys));
  };

  return {
    raiseOctave: handleRaiseOctave,
    lowerOctave: handleLowerOctave
  };
};
