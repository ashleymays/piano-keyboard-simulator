import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { playNote, endNote } from './use-piano-keys.helpers';

export function usePianoKeys() {
  const audioSamples = useSelector((state) => state.audio.samples);

  const playPianoKey = (event) => {
    playNote(event, audioSamples);
  };

  const stopPianoKey = (event) => {
    endNote(event);
  };

  useEffect(() => {
    document.addEventListener('keydown', playPianoKey);
    document.addEventListener('keyup', stopPianoKey);

    return () => {
      document.removeEventListener('keydown', playPianoKey);
      document.removeEventListener('keyup', stopPianoKey);
    };
  }, [audioSamples]);

  return [playPianoKey, stopPianoKey];
}
