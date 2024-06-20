import { useDispatch } from 'react-redux';
import { loadAudioSamples } from '~/features/audio';
import type { AppDispatch } from '~/features/store';

export const useInstrument = () => {
  const dispatch = useDispatch<AppDispatch>();

  const loadAudio = (newInstrument: string) => {
    dispatch(loadAudioSamples(newInstrument));
  };

  return loadAudio;
};
