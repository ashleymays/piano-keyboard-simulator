import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useInstrumentNames } from '~/features/instruments';
import { useAudio } from '~/features/audio';

export const useInstrumentDropdown = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const { instrumentNames, loadInstrumentNames } = useInstrumentNames();
  const { loadAudio } = useAudio();

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
    const init = async () => {
      const instrumentNames = await loadInstrumentNames();
      await selectInstrument(instrumentNames[0]);
    };

    toast.promise(init(), {
      loading: 'Initializing app...',
      success: 'App initialized',
      error:
        'Something went wrong initializing the app. Please reload the page and try again.'
    });

    setTimeout(init, 1000);
  }, []);

  return {
    selected,
    loadAudioForInstrument,
    instruments: instrumentNames
  };
};
