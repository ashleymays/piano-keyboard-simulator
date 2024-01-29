import { useState } from 'react';
import { AudioContext } from './context';
import { LoadingIcon } from './components/loading-icon';
import { Keyboard } from './components/keyboard';

export function App() {
  const [audioBuffers, setAudioBuffers] = useState(null);

  return (
    <AudioContext.Provider value={{ audioBuffers, setAudioBuffers }}>
      <LoadingIcon />
      <Keyboard />
    </AudioContext.Provider>
  );
}
