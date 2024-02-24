import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getAudio } from '~/slices/audio.slice';

export function useInstrument(defaultInstrument) {
  const [activeInstrument, setActiveInstrument] = useState(defaultInstrument);
  const dispatch = useDispatch();

  const setAudioForInstrument = (newDirectory) => {
    setActiveInstrument(newDirectory);
    dispatch(getAudio(newDirectory));
  };

  useEffect(() => {
    setAudioForInstrument(activeInstrument);
  }, []);

  return [activeInstrument, setAudioForInstrument];
}
