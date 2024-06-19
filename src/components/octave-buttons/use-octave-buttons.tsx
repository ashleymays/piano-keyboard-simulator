import { toast } from 'react-hot-toast';
import { useKeysMap } from '~/features/keys-map';

import type { PianoKey, KeysMap } from '~/features/keys-map';

const getPitch = (pianoKey: PianoKey) => {
  const { note, octave } = pianoKey;

  return `${note}${octave}`;
};

const getOctaveRange = (keysMap: KeysMap) => {
  const pianoKeys = Array.from(keysMap.values());

  const lowestPitch = getPitch(pianoKeys[0]);
  const highestPitch = getPitch(pianoKeys[pianoKeys.length - 1]);

  return `Note Range: ${lowestPitch} - ${highestPitch}`;
};

export const useOctaveButtons = () => {
  const { keysMap, raiseOctave, lowerOctave } = useKeysMap();

  const handleRaiseOctave = () => {
    raiseOctave();
    toast(getOctaveRange(keysMap));
  };

  const handleLowerOctave = () => {
    lowerOctave();
    toast(getOctaveRange(keysMap));
  };

  return {
    raiseOctave: handleRaiseOctave,
    lowerOctave: handleLowerOctave
  };
};
