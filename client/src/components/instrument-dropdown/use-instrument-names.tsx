import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

import { loadInstruments } from '~/features/instruments';
import type { RootState, AppDispatch } from '~/features/store';

export const useInstrumentNames = () => {
  const instruments = useSelector(
    (state: RootState) => state.instruments.names
  );
  const dispatch = useDispatch<AppDispatch>();

  const loadInstrumentNames = async () => {
    try {
      const result = await dispatch(loadInstruments());
      unwrapResult(result);
    } catch (error) {
      toast(error.message);
    }
  };

  useEffect(() => {
    loadInstrumentNames();
  }, []);

  return instruments;
};
