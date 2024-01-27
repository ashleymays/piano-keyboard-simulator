import { useRef, useMemo } from 'react';
import { LoadingIcon } from './components/loading-icon';
import { Keyboard } from './components/keyboard';
import { MainContext } from './context';

export function App() {
  const buffers = useRef({});

  const value = useMemo(() => {
    return { buffers };
  }, []);

  return (
    <MainContext.Provider value={value}>
      <LoadingIcon />
      <Keyboard />
    </MainContext.Provider>
  );
}
