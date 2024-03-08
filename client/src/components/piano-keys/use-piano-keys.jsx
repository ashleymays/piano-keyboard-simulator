import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getPitchByEvent, playNote, endNote } from './use-piano-keys.helpers';

export function usePianoKeys() {
  const audioSamples = useSelector((state) => state.audio.samples);

  const playPianoKey = (event) => {
    const pitch = getPitchByEvent(event);

    if (pitch) {
      playNote(pitch, audioSamples);
    }
  };

  const stopPianoKey = (event) => {
    const pitch = getPitchByEvent(event);
    endNote(pitch);
  };

  useEffect(() => {
    document.addEventListener('keydown', playPianoKey);
    document.addEventListener('keyup', stopPianoKey);

    return () => {
      document.removeEventListener('keydown', playPianoKey);
      document.removeEventListener('keyup', stopPianoKey);
    };
  }, [audioSamples]);

  return playPianoKey;
}
