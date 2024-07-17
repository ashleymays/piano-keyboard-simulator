import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { loadAudioSamples } from '~/store/audio';
import { useAppDispatch } from '~/store/hooks';
import { fetchWithTimeLimit } from '~/lib/fetch-with-time-limit';

/**
 * Behavior for initializing and managing the instrument dropdown.
 *
 * @hook
 */
export const useInstrumentDropdown = () => {
  const [instrument, setInstrument] = useState<string | null>(null);
  const [instrumentNames, setInstrumentNames] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const selectInstrument = async (newInstrument: string) => {
    await dispatch(loadAudioSamples(newInstrument)).unwrap();
    setInstrument(newInstrument);
  };

  const loadInstrument = (instrument: string) => {
    toast.promise(selectInstrument(instrument), {
      loading: 'Loading...',
      success: 'Ready to play!',
      error: 'Something went wrong.'
    });
  };

  useEffect(() => {
    const fetchInstrumentNames = (): Promise<string[]> => {
      return fetchWithTimeLimit(
        `${import.meta.env.VITE_INSTRUMENT_API_URL}/instruments`
      );
    };

    const initDropdown = async () => {
      const instruments = await fetchInstrumentNames();
      await selectInstrument(instruments[0]);
      setInstrumentNames([...instruments]);
    };

    setTimeout(() => {
      toast.promise(initDropdown(), {
        loading: 'Preparing keyboard...',
        success: 'Ready to play!',
        error: 'There was an issue preparing the keyboard.'
      });
    }, 500);
  }, []);

  return { instrument, instrumentNames, loadInstrument };
};
