import { loadInstruments } from '~/features/instruments';
import { useAppSelector, useAppDispatch } from '~/features/store';

export const useInstrumentNames = () => {
  const instruments = useAppSelector((state) => state.instruments.names);
  const dispatch = useAppDispatch();

  const loadInstrumentNames = () => {
    return dispatch(loadInstruments()).unwrap();
  };

  return { instruments, loadInstrumentNames };
};
