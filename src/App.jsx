import { useState } from 'react';
import { LoadingIcon } from './components/loading-icon';
import { Keyboard } from './components/keyboard';
import { MainContext } from './context';

export function App() {
  const [isAppLoading, setIsAppLoading] = useState(false);
  return (
    <MainContext.Provider value={{ isAppLoading, setIsAppLoading }}>
      <LoadingIcon />
      <Keyboard />
    </MainContext.Provider>
  );
}
