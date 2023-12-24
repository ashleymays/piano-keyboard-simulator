import { useState } from 'react';

import LoadingIcon from './components/LoadingIcon';
import Keyboard from './components/Keyboard';

import MainContext from './context';

function App() {
  const [audio, setAudio] = useState({});
  const [isAppLoading, setIsAppLoading] = useState(true);

  return (
    <MainContext.Provider
      value={{ audio, setAudio, isAppLoading, setIsAppLoading }}
    >
      <LoadingIcon />
      <Keyboard />
    </MainContext.Provider>
  );
}

export default App;
