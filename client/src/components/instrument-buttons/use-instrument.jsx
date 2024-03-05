import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { loadAudioSamples } from '~/features/audio.slice';

export function useInstrument(defaultInstrument) {
  const [activeInstrument, setActiveInstrument] = useState(defaultInstrument);
  const dispatch = useDispatch();

  const loadAudioForInstrument = (newDirectory) => {
    setActiveInstrument(newDirectory);
    dispatch(loadAudioSamples(newDirectory));
  };

  useEffect(() => {
    loadAudioForInstrument(activeInstrument);
  }, []);

  return [activeInstrument, loadAudioForInstrument];
}
