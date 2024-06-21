import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { unwrapResult } from '@reduxjs/toolkit';
import { loadAudioSamples } from '~/features/audio';
import type { AppDispatch } from '~/features/store';

export const useInstrumentAudio = () => {
  const dispatch = useDispatch<AppDispatch>();

  const loadAudio = async (newInstrument: string) => {
    toast.loading('Loading audio...');

    const result = await dispatch(loadAudioSamples(newInstrument));
    unwrapResult(result);

    toast.success('Audio loaded successfully');
  };

  const handleAudio = async (newInstrument: string) => {
    try {
      await loadAudio(newInstrument);
    } catch (error) {
      console.log(error);
      toast.error('There was an issue loading the audio. Please try again.');
    }
  };

  return handleAudio;
};
