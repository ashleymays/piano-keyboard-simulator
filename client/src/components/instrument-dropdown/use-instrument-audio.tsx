import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

import { loadAudioSamples } from '~/features/audio';
import type { AppDispatch } from '~/features/store';

export const useInstrumentAudio = () => {
  const dispatch = useDispatch<AppDispatch>();

  const loadAudio = async (newInstrument: string) => {
    try {
      const result = await dispatch(loadAudioSamples(newInstrument));
      unwrapResult(result);
    } catch (error) {
      toast(error.message);
    }
  };

  return loadAudio;
};
