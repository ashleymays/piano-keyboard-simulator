import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getPitchByEvent, playNote } from './use-piano-keys.helpers';

export function usePianoKeys() {
  const audioSamples = useSelector((state) => state.audio.audioSamples);

  const playPianoKey = (event) => {
    const pitch = getPitchByEvent(event);

    if (pitch) {
      playNote(pitch, audioSamples);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', playPianoKey);

    return () => {
      document.removeEventListener('keydown', playPianoKey);
    };
  }, []);

  return playPianoKey;
}
