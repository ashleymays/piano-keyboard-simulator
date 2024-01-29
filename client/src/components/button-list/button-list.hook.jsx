import { useState, useEffect, useContext } from 'react';
import { AudioContext } from '~/context';
import { getAudioBuffers } from './button-list.helpers';

export function useInstrument(initialValue = 'acoustic-grand') {
  const [activeInstrument, setActiveInstrument] = useState(initialValue);

  const { setAudioBuffers } = useContext(AudioContext);

  const setAudioBuffersForInstrument = async (instrumentDirectory) => {
    try {
      setActiveInstrument(instrumentDirectory);
      const audioBuffersMap = await getAudioBuffers(instrumentDirectory);
      setAudioBuffers(audioBuffersMap._buffers);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setAudioBuffersForInstrument(activeInstrument);
  }, []);

  return [activeInstrument, setAudioBuffersForInstrument];
}
