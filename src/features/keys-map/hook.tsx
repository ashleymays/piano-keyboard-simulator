import { useKeysMapStore } from './store';
import type { KeysMapState } from './types';

export const useKeysMap = () => {
  const keysMap = useKeysMapStore(
    (state: KeysMapState) => state.keysMapWrapper.keysMap
  );

  const raiseOctaves = useKeysMapStore(
    (state: KeysMapState) => state.raiseOctave
  );
  const lowerOctaves = useKeysMapStore(
    (state: KeysMapState) => state.lowerOctave
  );

  return { keysMap, raiseOctaves, lowerOctaves };
};
