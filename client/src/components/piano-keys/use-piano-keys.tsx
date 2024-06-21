import { useState, useEffect, type MouseEvent as ReactMouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { Player } from 'tone';
import type { RootState } from '~/features/store';

export type PianoKeyEvent = KeyboardEvent | ReactMouseEvent<HTMLButtonElement>;

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

  const playPianoKey = (event: PianoKeyEvent) => {
    const keyId = getKeyIdByEvent(event);
    const pitch = getPitch(keyId);

    if (pitch && !pressedKeys[keyId]) {
      playNoteAtPitch(pitch);
      setPressedKeys({ ...pressedKeys, [keyId]: true });
    }
  };

  const releasePianoKey = (event: PianoKeyEvent) => {
    const keyId = getKeyIdByEvent(event);
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

  return { keysMap, pressedKeys, playPianoKey, releasePianoKey };
};

const getKeyIdByEvent = (event: PianoKeyEvent) => {
  if (isKeyboardEvent(event)) {
    return event.key;
  }
  if (isMouseEvent(event)) {
    return event.currentTarget.value;
  }
  return null;
};

const isKeyboardEvent = (e: PianoKeyEvent): e is KeyboardEvent => {
  return (e as KeyboardEvent).key !== undefined;
};

const isMouseEvent = (
  e: PianoKeyEvent
): e is ReactMouseEvent<HTMLButtonElement> => {
  return (e as ReactMouseEvent).currentTarget !== undefined;
};
