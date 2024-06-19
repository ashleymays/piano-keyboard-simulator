import { raiseOctave, lowerOctave } from './helpers';
import { useKeysMapStore } from './store';

export const useKeysMap = () => {
  const keysMap = useKeysMapStore((state) => state.keysMapWrapper.keysMap);

  const handleRaiseOctave = () => {
    useKeysMapStore.setState((state) => ({
      keysMapWrapper: {
        keysMap: raiseOctave(state.keysMapWrapper.keysMap)
      }
    }));
  };

  const handleLowerOctave = () => {
    useKeysMapStore.setState((state) => ({
      keysMapWrapper: {
        keysMap: lowerOctave(state.keysMapWrapper.keysMap)
      }
    }));
  };

  return {
    keysMap,
    raiseOctave: handleRaiseOctave,
    lowerOctave: handleLowerOctave
  };
};
