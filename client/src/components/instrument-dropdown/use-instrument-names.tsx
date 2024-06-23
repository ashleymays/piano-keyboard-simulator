import { useSelector, useDispatch } from 'react-redux';
import { loadInstruments } from '~/features/instruments';
import type { RootState, AppDispatch } from '~/features/store';

export const useInstrumentNames = () => {
  const instruments = useSelector(
    (state: RootState) => state.instruments.names
  );
  const dispatch = useDispatch<AppDispatch>();

  const loadInstrumentNames = (): Promise<string[]> => {
    return dispatch(loadInstruments()).unwrap();
  };

  return { instruments, loadInstrumentNames };
};
