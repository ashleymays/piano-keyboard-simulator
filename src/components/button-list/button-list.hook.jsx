import { useState, useEffect, useContext } from 'react';
import { MainContext } from '~/context';
import { instruments } from '~/data';
import { getAudioBuffers } from './button-list.helpers';

export function useAudio(defaultDirectory = instruments[0].directory) {
  const [instrumentDirectory, setInstrumentDirectory] =
    useState(defaultDirectory);

  const { buffers } = useContext(MainContext);

  const setBuffers = async () => {
    if (!buffers.current[instrumentDirectory]) {
      buffers.current[instrumentDirectory] =
        await getAudioBuffers(instrumentDirectory);
    }
    buffers.current._active = instrumentDirectory;
  };

  const setAudio = async () => {
    try {
      await setBuffers();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setAudio();
  }, [instrumentDirectory]);

  return [instrumentDirectory, setInstrumentDirectory];
}
