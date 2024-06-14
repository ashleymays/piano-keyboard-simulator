import { useKeysMapStore } from './store';
import type { KeysMapState } from './types';

export const useKeysMap = () => {
  const keysMap = useKeysMapStore(
    (state: KeysMapState) => state.keysMapWrapper.keysMap
  );

  const raiseOctave = useKeysMapStore(
    (state: KeysMapState) => state.raiseOctave
  );

  const lowerOctave = useKeysMapStore(
    (state: KeysMapState) => state.lowerOctave
  );

  return { keysMap, raiseOctave, lowerOctave };
};
