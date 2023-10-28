import { createContext } from 'react';

export const AudioBuffersContext = createContext({ original: 'original' });
export const WebAudioContext = createContext(new AudioContext());
