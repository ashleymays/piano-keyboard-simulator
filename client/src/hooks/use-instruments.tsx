import { loadInstruments } from '~/features/instruments';
import { useAppSelector, useAppDispatch } from '~/features/store';

export const useInstruments = () => {
  const instruments = useAppSelector((state) => state.instruments.names);
  const dispatch = useAppDispatch();

  const fetchInstruments = () => {
    return dispatch(loadInstruments()).unwrap();
  };

  return { instruments, fetchInstruments };
};
