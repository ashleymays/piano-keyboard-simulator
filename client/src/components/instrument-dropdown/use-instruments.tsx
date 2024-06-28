import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { loadAudioSamples } from '~/features/audio';
import { loadInstruments } from '~/features/instruments';
import { useAppSelector, useAppDispatch } from '~/features/store';

export const useInstruments = () => {
  const instruments = useAppSelector((state) => state.instruments.names);
  const dispatch = useAppDispatch();

  const loadAudio = async (instrument: string) => {
    await dispatch(loadAudioSamples(instrument));
  };

  const loadAudioForInstrument = (instrument: string) => {
    toast.promise(loadAudio(instrument), {
      loading: 'Loading audio...',
      success: 'Audio loaded successfully',
      error: 'Something went wrong loading the audio.'
    });
  };

  const loadInstrumentNames = async () => {
    await dispatch(loadInstruments());
  };

  useEffect(() => {
    toast.promise(loadInstrumentNames(), {
      loading: 'Initializing app...',
      success: 'Initialized successfully',
      error:
        'Something went wrong initializing the app. Please reload the page and try again.'
    });
  }, []);

  return { instruments, loadAudioForInstrument };
};
