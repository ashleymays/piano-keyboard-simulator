import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { loadAudioSamples } from '~/features/audio';
import type { AppDispatch } from '~/features/store';

export const useInstrumentAudio = () => {
  const dispatch = useDispatch<AppDispatch>();

  const loadAudio = async (newInstrument: string) => {
    try {
      toast('Loading audio...');
      await dispatch(loadAudioSamples(newInstrument));
      toast('Audio loaded successfully');
    } catch (error) {
      toast(error.message);
    }
  };

  return loadAudio;
};
