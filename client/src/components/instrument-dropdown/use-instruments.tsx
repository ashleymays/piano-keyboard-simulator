import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { loadAudioSamples } from '~/features/audio';
import { loadInstruments } from '~/features/instruments';
import { useAppSelector, useAppDispatch } from '~/features/store';

export const useInstruments = () => {
  const [currentInstrument, setCurrentInstrument] = useState(null);
  const instruments = useAppSelector((state) => state.instruments.names);
  const dispatch = useAppDispatch();

  const loadAudio = async (instrument: string) => {
    await dispatch(loadAudioSamples(instrument));
    setCurrentInstrument(instrument);
  };

  const loadAudioForInstrument = (instrument: string) => {
    toast.promise(loadAudio(instrument), {
      loading: 'Loading audio...',
      success: 'Audio loaded successfully',
      error: 'Something went wrong loading the audio.'
    });
  };

  useEffect(() => {
    setTimeout(() => {
      const init = async () => {
        const instrumentNames = await dispatch(loadInstruments()).unwrap();
        await loadAudio(instrumentNames[0]);
      };

      toast.promise(init(), {
        loading: 'Initializing app...',
        success: 'Initialized successfully',
        error:
          'Something went wrong initializing the app. Please reload the page and try again.'
      });
    }, 1000);
  }, []);

  return { currentInstrument, instruments, loadAudioForInstrument };
};
