import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { loadInstruments } from '~/features/instruments';
import { loadAudioSamples } from '~/features/audio';
import type { RootState, AppDispatch } from '~/features/store';

export const useInstruments = () => {
  const instruments = useSelector((state: RootState) => state.instruments.names);
  const dispatch = useDispatch<AppDispatch>();

  const loadAudioForInstrument = async (instrument: string) => {
    try {
      toast.loading('Loading audio...');

      await dispatch(loadAudioSamples(instrument));

      toast.success('Audio loaded successfully');
    } catch (error) {
      console.error(error);
      toast.error('There was an issue loading the audio.');
    }
  };

  const initAudioForInstrument = async () => {
    try {
      toast.loading('Initializing...');

      const instrumentNames = await dispatch(loadInstruments()).unwrap();
      await dispatch(loadAudioSamples(instrumentNames[0]));

      toast.success('Initialized successfully');
    } catch (error) {
      console.error(error);
      toast.error(
        'There was an issue initializing the keyboard. Try reloading the page.'
      );
    }
  };

  useEffect(() => {
    initAudioForInstrument();
  }, []);

  return { instruments, loadAudioForInstrument };
};
