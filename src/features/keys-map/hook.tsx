import { useKeysMapStore } from './store';
import type { KeysMapState } from './types';

export const useKeysMap = () => {
  const keysMap = useKeysMapStore(
    (state: KeysMapState) => state.keysMapWrapper.keysMap
  );

  return [keysMap];
};
