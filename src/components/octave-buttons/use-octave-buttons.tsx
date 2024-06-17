import { toast } from 'react-hot-toast';
import { useKeysMap, type PianoKey } from '~/features/keys-map';

export const useOctaveButtons = () => {
  const { keysMap, raiseOctave, lowerOctave } = useKeysMap();

  const getOctaveRange = () => {
    const pianoKeys = Array.from(keysMap.values());

    const lowestPitch = getPitch(pianoKeys[0]);
    const highestPitch = getPitch(pianoKeys[pianoKeys.length - 1]);

    return `Note Range: ${lowestPitch} - ${highestPitch}`;
  };

  const getPitch = (pianoKey: PianoKey) => {
    const { note, octave } = pianoKey;

    return `${note}${octave}`;
  };

  const raiseOctaveHandler = () => {
    raiseOctave();
    toast(getOctaveRange());
  };

  const lowerOctaveHandler = () => {
    lowerOctave();
    toast(getOctaveRange());
  };

  return { raiseOctave: raiseOctaveHandler, lowerOctave: lowerOctaveHandler };
};
