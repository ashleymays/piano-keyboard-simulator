import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
      toast('Loading instruments...');
      await dispatch(loadInstruments());
      toast('Instruments loaded successfully');
    } catch (error) {
      toast(error.message);
    }
  };

  useEffect(() => {
    loadInstrumentNames();
  }, []);

  return instruments;
};
