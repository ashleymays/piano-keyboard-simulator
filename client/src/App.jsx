import { useState } from 'react';

import Keyboard from 'src/components/Keyboard';

function App() {
  const [buffers, setBuffers] = useState({});
  const [isAppLoading, setIsAppLoading] = useState(true);

  return (
    <MainContext.Provider
      value={{ buffers, setBuffers, isAppLoading, setIsAppLoading }}
    >
      <LoadingIcon />
      <Keyboard />
    </MainContext.Provider>
  );
}

export default App;
