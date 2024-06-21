import { useSelector } from 'react-redux';
import type { RootState } from '~/features/store';

export const usePianoKeys = () => {
  const keysMap = useSelector((state: RootState) => state.keysMap);
  const audioSamples = useSelector((state: RootState) => state.audio.samples);

  const playPianoKey = () => {
    console.log(audioSamples);
  };

  return [keysMap, playPianoKey] as const;
};
