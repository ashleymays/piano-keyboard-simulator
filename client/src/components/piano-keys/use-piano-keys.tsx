import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { playNote, endNote } from './use-piano-keys.helpers';
import type { RootState } from '~/features/store';

export const usePianoKeys = () => {
  const keysMap = useSelector((state: RootState) => state.keysMap);
  const audioSamples = useSelector((state: RootState) => state.audio.samples);

  const playPianoKey = (event: KeyboardEvent) => {
    playNote({ event, audioSamples, keysMap });
  };

  const stopPianoKey = (event: KeyboardEvent) => {
    endNote(event);
  };

  useEffect(() => {
    document.addEventListener('keydown', playPianoKey);
    document.addEventListener('keyup', stopPianoKey);

    return () => {
      document.removeEventListener('keydown', playPianoKey);
      document.removeEventListener('keyup', stopPianoKey);
    };
  }, [keysMap, audioSamples]);

  return keysMap;
};
