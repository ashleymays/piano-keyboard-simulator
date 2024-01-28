import { useState, useEffect, useContext } from 'react';
import { MainContext } from '~/context';
import { getAudio } from './button-list.helpers';

export function useAudio() {
  const [instrumentDirectory, setInstrumentDirectory] =
    useState('acoustic-grand');

  const { buffers } = useContext(MainContext);

  useEffect(() => {
    buffers.current = getAudio(instrumentDirectory);
  }, [instrumentDirectory]);

  return [instrumentDirectory, setInstrumentDirectory];
}
