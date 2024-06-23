import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useInstrumentNames } from './use-instrument-names';
import { useInstrumentAudio } from './use-instrument-audio';

export const useInstruments = () => {
  const { loadInstrumentNames } = useInstrumentNames();
  const { loadAudio } = useInstrumentAudio();

  const loadAudioForInstrument = async (instrument: string) => {
    try {
      toast.loading('Loading audio...');
      await loadAudio(instrument);
      toast.success('Audio loaded successfully');
    } catch (error) {
      console.error(error);
      toast.error('There was an issue loading the audio.');
    }
  };

  const initAudioForInstrument = async () => {
    try {
      toast.loading('Initializing...');

      const instrumentNames = await loadInstrumentNames();
      await loadAudio(instrumentNames[0]);

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

  return { loadAudioForInstrument };
};
