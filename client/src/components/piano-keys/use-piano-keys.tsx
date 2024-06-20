import { useSelector } from 'react-redux';
import type { RootState } from '~/features/store';

export const usePianoKeys = () => {
  const keysMap = useSelector((state: RootState) => state.keysMap);

  return keysMap;
};
