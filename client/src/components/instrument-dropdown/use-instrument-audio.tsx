import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useInstrumentNames } from './use-instrument-names';
import { loadAudioSamples } from '~/features/audio';
import type { AppDispatch } from '~/features/store';

export const useInstrumentAudio = () => {
  const [currentInstrument, setCurrentInstrument] = useState(null);
  const [_, loadInstrumentNames] = useInstrumentNames();
  const dispatch = useDispatch<AppDispatch>();

  const loadAudio = async (instrument: string) => {
    setCurrentInstrument(instrument);
    await dispatch(loadAudioSamples(instrument)).unwrap();
  };

  const handleAudio = async (instrument: string) => {
    try {
      toast.loading('Loading audio...');
      await loadAudio(instrument);
      toast.success('Audio loaded successfully');
    } catch (error) {
      console.log(error);
      toast.error('There was an issue fetching the audio. Please try again.');
    }
  };

  const initAudio = async () => {
    try {
      toast.loading('Loading instruments...');

      const instrumentNames = await loadInstrumentNames();
      loadAudio(instrumentNames[0]);

      toast.success('Instruments loaded successfully');
    } catch (error) {
      console.log(error);
      toast.error(
        'There was an issue loading the instruments. Please reload the page and try again.'
      );
    }
  };

  useEffect(() => {
    initAudio();
  }, []);

  return [currentInstrument, handleAudio] as const;
};
