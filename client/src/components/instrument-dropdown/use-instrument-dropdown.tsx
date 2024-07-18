import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { loadAudio } from '~/store/audio';
import { useAppDispatch } from '~/store/hooks';
import { fetchWithTimeLimit } from '~/lib/fetch-with-time-limit';
import { useDelayedEffect } from './use-delayed-effect';

/**
 * Behavior for initializing and managing the instrument dropdown.
 *
 * @hook
 */
export const useInstrumentDropdown = () => {
  const [instrument, setInstrument] = useState<string | null>(null);
  const [instrumentNames, setInstrumentNames] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const loadInstrument = async (newInstrument: string) => {
    await dispatch(loadAudio(newInstrument)).unwrap();
    setInstrument(newInstrument);
  };

  const selectInstrument = (instrument: string) => {
    toast.promise(loadInstrument(instrument), {
      loading: 'Loading...',
      success: 'Ready to play!',
      error: 'Something went wrong.'
    });
  };

  useDelayedEffect(() => {
    const initDropdown = async () => {
      const instruments = await fetchInstrumentNames();
      setInstrumentNames([...instruments]);
      await loadInstrument(instruments[0]);
    };

    toast.promise(initDropdown(), {
      loading: 'Preparing keyboard...',
      success: 'Ready to play!',
      error: 'There was an issue preparing the keyboard.'
    });
  }, []);

  return { instrument, instrumentNames, selectInstrument };
};

const fetchInstrumentNames = (): Promise<string[]> => {
  return fetchWithTimeLimit(
    `${import.meta.env.VITE_INSTRUMENT_API_URL}/instruments`
  );
};
