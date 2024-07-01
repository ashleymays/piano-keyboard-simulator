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
      error:
        'Something went wrong loading the audio. Please try again or choose another instrument.'
    });
  };

  useEffect(() => {
    const init = () => {
      const loadInstrumentNames = async () => {
        const instrumentNames = await dispatch(loadInstruments()).unwrap();
        await loadAudio(instrumentNames[0]);
      };

      toast.promise(loadInstrumentNames(), {
        loading: 'Initializing app...',
        success: 'App initialized',
        error:
          'Something went wrong initializing the app. Please reload the page and try again.'
      });
    };

    setTimeout(init, 1000);
  }, []);

  return { currentInstrument, instruments, loadAudioForInstrument };
};
