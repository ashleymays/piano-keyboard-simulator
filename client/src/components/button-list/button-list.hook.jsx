import { useState, useEffect, useContext } from 'react';
import { MainContext } from '~/context';
import { getAudioBuffers } from './button-list.helpers';

export function useAudio() {
  const [instrumentDirectory, setInstrumentDirectory] =
    useState('acoustic-grand');

  const { buffers } = useContext(MainContext);

  const setAudioBuffers = async () => {
    try {
      buffers.current = await getAudioBuffers(instrumentDirectory);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setAudioBuffers();
  }, [instrumentDirectory]);

  return [instrumentDirectory, setInstrumentDirectory];
}
