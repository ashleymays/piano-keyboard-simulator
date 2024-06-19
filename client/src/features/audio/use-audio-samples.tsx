import { useSelector, useDispatch } from 'react-redux';
import { loadAudioSamples } from './slice';
import type { RootState, AppDispatch } from '../store';

export const useAudioSamples = () => {
  const audioSamples = useSelector((state: RootState) => state.audio.samples);
  const dispatch = useDispatch<AppDispatch>();

  const handleLoadAudioSamples = (instrument: string) => {
    dispatch(loadAudioSamples(instrument));
  };

  return { audioSamples, loadAudioSamples: handleLoadAudioSamples };
};
