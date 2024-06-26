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

  useEffect(() => {
    const init = async () => {
      const initializedInstruments = await dispatch(loadInstruments()).unwrap();
      await loadAudio(initializedInstruments[0]);
    };

    toast.promise(init(), {
      loading: 'Initializing app...',
      success: 'Initialized successfully',
      error: 'Something went wrong. Please reload the page and try again.'
    });
  }, []);

  return { instruments, loadAudioForInstrument };
};
