import { raiseOctave, lowerOctave } from './helpers';
import { useKeysMapStore } from './store';

export const useKeysMap = () => {
  const keysMap = useKeysMapStore((state) => state.keysMapWrapper.keysMap);

  const raiseOctaveHandler = () => {
    useKeysMapStore.setState((state) => {
      const newKeysMap = raiseOctave(state.keysMapWrapper.keysMap);

      return { keysMapWrapper: { keysMap: newKeysMap } };
    });
  };

  const lowerOctaveHandler = () => {
    useKeysMapStore.setState((state) => {
      const newKeysMap = lowerOctave(state.keysMapWrapper.keysMap);

      return { keysMapWrapper: { keysMap: newKeysMap } };
    });
  };

  return {
    keysMap,
    raiseOctave: raiseOctaveHandler,
    lowerOctave: lowerOctaveHandler
  };
};
