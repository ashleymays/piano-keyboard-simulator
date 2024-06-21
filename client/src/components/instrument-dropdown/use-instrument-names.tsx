import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { unwrapResult } from '@reduxjs/toolkit';
import { loadInstruments } from '~/features/instruments';
import type { RootState, AppDispatch } from '~/features/store';

export const useInstrumentNames = () => {
  const instruments = useSelector(
    (state: RootState) => state.instruments.names
  );

  const dispatch = useDispatch<AppDispatch>();

  const loadInstrumentNames = async () => {
    toast.loading('Loading instruments...');

    const result = await dispatch(loadInstruments());
    unwrapResult(result);

    toast.success('Instruments loaded successfully');
  };

  const handleInstrumentNames = async () => {
    try {
      await loadInstrumentNames();
    } catch (error) {
      console.log(error);
      toast.error(
        'There was an issue loading the audio. Please reload the page and try again.'
      );
    }
  };

  useEffect(() => {
    handleInstrumentNames();
  }, []);

  return instruments;
};
