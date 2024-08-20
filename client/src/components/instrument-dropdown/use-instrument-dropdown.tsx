import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { loadAudio } from '~/store/audio';
import { useAppDispatch } from '~/store/hooks';
import { fetchData } from '~/lib/fetch-data';

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
      error: (err) => {
        console.log(err);
        return 'Something went wrong. Please try again in a few minutes.';
      }
    });
  };

  useEffect(() => {
    const initDropdown = async () => {
      const instruments = await fetchInstrumentNames();
      setInstrumentNames([...instruments]);
      await loadInstrument(instruments[0]);
    };

    const init = () => {
      toast.promise(initDropdown(), {
        loading: 'Loading...',
        success: 'Ready to play!',
        error: (err) => {
          console.log(err);
          return 'There was an issue starting the keyboard. Please reload the page and try again.';
        }
      });
    };

    /*
      Workaround for showing a toast when the page loads.
      Need to call `setTimeout` on the effect callback in order for toasts to appear on init.

      https://github.com/timolins/react-hot-toast/pull/251
     */
    const timer = setTimeout(() => init());

    return () => clearTimeout(timer);
  }, []);

  return { instrument, instrumentNames, selectInstrument };
};

const fetchInstrumentNames = (): Promise<string[]> => {
  return fetchData(`${import.meta.env.VITE_INSTRUMENT_API_URL}/instruments`);
};
