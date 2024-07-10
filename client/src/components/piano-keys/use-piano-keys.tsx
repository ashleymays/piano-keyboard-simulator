import { useState, type MouseEvent as ReactMouseEvent } from 'react';
import { useAppSelector } from '~/features/hooks';
import type { PianoKey } from '~/features/piano-keys';
import type { Player } from 'tone';

export const usePianoKeys = () => {
  const [pressedKeys, setPressedKeys] = useState({});
  const audioPlayers = useAppSelector((state) => state.audio.players);
  const pianoKeys = useAppSelector((state) => state.pianoKeys);

  const onPianoKeyPress = (event: KeyboardEvent | ReactMouseEvent) => {
    if (!audioPlayers) {
      return;
    }

    const keyId = getPianoKeyId(event);

    if (!keyId) {
      return;
    }

    const pianoKey = findPianoKeyById(keyId);

    if (!pianoKey || pressedKeys[keyId]) {
      return;
    }

    const audioPlayer = audioPlayers.player(getPitch(pianoKey));

    if (!audioPlayer) {
      return;
    }

    playPitch(audioPlayer);
    setPressedKeys({ ...pressedKeys, [keyId]: true });
  };

  const findPianoKeyById = (keyId: PianoKey['id']) => {
    return pianoKeys.find((pianoKey) => pianoKey.id === keyId);
  };

  const getPitch = (pianoKey: PianoKey) => {
    return `${pianoKey.note}${pianoKey.octave}`;
  };

  const playPitch = (audioPlayer: Player) => {
    audioPlayer.toDestination().start();
  };

  const onPianoKeyRelease = (event: KeyboardEvent | ReactMouseEvent) => {
    if (!audioPlayers) {
      return;
    }

    const keyId = getPianoKeyId(event);

    if (keyId) {
      setPressedKeys({ ...pressedKeys, [keyId]: false });
    }
  };

  return { pianoKeys, pressedKeys, onPianoKeyPress, onPianoKeyRelease };
};

const getPianoKeyId = (event: KeyboardEvent | ReactMouseEvent) => {
  if (isKeyboardEvent(event)) {
    return event.key.toLowerCase();
  }

  const keyId = (event.target as HTMLInputElement).value;

  return keyId ? keyId.toLowerCase() : null;
};

const isKeyboardEvent = (
  event: KeyboardEvent | ReactMouseEvent
): event is KeyboardEvent => {
  return (event as KeyboardEvent).key !== undefined;
};
