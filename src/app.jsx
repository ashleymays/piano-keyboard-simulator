import { useRef, useState } from 'react';
import { LoadingIcon } from './components/loading-icon';
import { Keyboard } from './components/keyboard';
import { MainContext } from './context';

export function App() {
  const buffers = useRef({});
  const [isAppLoading, setIsAppLoading] = useState(false);
  return (
    <MainContext.Provider value={{ buffers, isAppLoading, setIsAppLoading }}>
      <LoadingIcon />
      <Keyboard />
    </MainContext.Provider>
  );
}
