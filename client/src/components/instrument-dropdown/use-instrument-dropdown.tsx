import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useInstrumentNames } from './use-instrument-names';
import { useInstrumentAudio } from './use-instrument-audio';

export const useInstrumentDropdown = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const { instrumentNames, loadInstrumentNames } = useInstrumentNames();
  const { loadAudio } = useInstrumentAudio();

  const selectInstrument = async (instrument: string) => {
    await loadAudio(instrument);
    setSelected(instrument);
  };

  const loadAudioForInstrument = (instrument: string) => {
    toast.promise(selectInstrument(instrument), {
      loading: 'Loading instrument...',
      success: 'Instrument loaded successfully',
      error:
        'Something went wrong loading the instrument. Please try again or choose another instrument.'
    });
  };

  useEffect(() => {
    const initApp = () => {
      const initDropdown = async () => {
        const instrumentNames = await loadInstrumentNames();

        // We use the last instrument listed because the first one is always 8-bit and I don't like that one
        await selectInstrument(instrumentNames[instrumentNames.length - 1]);
      };

      toast.promise(initDropdown(), {
        loading: 'Initializing app...',
        success: 'App initialized',
        error:
          'Something went wrong initializing the app. Please reload the page and try again.'
      });
    };

    setTimeout(initApp, 500);
  }, []);

  return {
    selected,
    loadAudioForInstrument,
    instruments: instrumentNames
  };
};
