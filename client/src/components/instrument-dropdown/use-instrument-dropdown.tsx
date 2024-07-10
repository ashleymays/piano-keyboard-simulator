import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { loadAudioSamples } from '~/store/audio';
import { useAppDispatch } from '~/store/hooks';
import { fetchWithTimeLimit } from '~/utils/fetch-with-time-limit';

export const useInstrumentDropdown = () => {
  const [instrument, setInstrument] = useState(null);
  const [instrumentNames, setInstrumentNames] = useState([]);
  const dispatch = useAppDispatch();

  const showToast = (asyncFn: () => Promise<void>) => {
    toast.promise(asyncFn(), {
      loading: 'Loading...',
      success: 'Ready to play!',
      error: 'Something went wrong.'
    });
  };

  const selectInstrument = async (newInstrument: string) => {
    await dispatch(loadAudioSamples(newInstrument));
    setInstrument(newInstrument);
  };

  const loadInstrument = (instrument: string) => {
    showToast(() => selectInstrument(instrument));
  };

  useEffect(() => {
    const fetchInstrumentNames = async () => {
      const response = await fetchWithTimeLimit(
        `${import.meta.env.VITE_INSTRUMENT_API_URL}/instruments`
      );

      if (response.error) {
        throw new Error(response.error);
      }

      return response.data;
    };

    const initDropdown = async () => {
      const instruments = await fetchInstrumentNames();

      await selectInstrument(instruments[0]);
      setInstrumentNames([...instruments]);
    };

    setTimeout(() => showToast(initDropdown), 500);
  }, []);

  return { instrument, instrumentNames, loadInstrument };
};
