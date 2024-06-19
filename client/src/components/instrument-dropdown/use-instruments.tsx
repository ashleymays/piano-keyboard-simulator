import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadInstruments } from '~/features/instruments';
import type { RootState, AppDispatch } from '~/features/store';

export const useInstruments = () => {
  const instruments = useSelector(
    (state: RootState) => state.instruments.names
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadInstruments());
  }, []);

  return { instruments };
};
