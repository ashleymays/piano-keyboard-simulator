import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Player } from 'tone';
import type { RootState } from '~/features/store';

export const usePianoKeys = () => {
  const [pressedKeys, setPressedKeys] = useState({});
  const keysMap = useSelector((state: RootState) => state.keysMap);
  const audioSamples = useSelector((state: RootState) => state.audio.samples);

  const getPitch = (keyId: string) => {
    const pianoKey = keysMap.find((pianoKey) => pianoKey.id === keyId);

    return pianoKey ? `${pianoKey.note}${pianoKey.octave}` : null;
  };

  const playNoteAtPitch = (pitch: string) => {
    const player = new Player().toDestination();
    player.buffer = audioSamples.get(pitch);
    player.start();
  };

  const playPianoKey = (event: KeyboardEvent) => {
    const keyId = event.key;
    const pitch = getPitch(keyId);

    if (pitch && !pressedKeys[keyId]) {
      playNoteAtPitch(pitch);
      setPressedKeys({ ...pressedKeys, [keyId]: true });
    }
  };

  const releasePianoKey = (event: KeyboardEvent) => {
    const keyId = event.key;
    setPressedKeys({ ...pressedKeys, [keyId]: false });
  };

  useEffect(() => {
    document.addEventListener('keydown', playPianoKey);
    document.addEventListener('keyup', releasePianoKey);

    return () => {
      document.removeEventListener('keydown', playPianoKey);
      document.removeEventListener('keyup', releasePianoKey);
    };
  }, [keysMap, audioSamples, pressedKeys]);

  return [keysMap, pressedKeys] as const;
};
