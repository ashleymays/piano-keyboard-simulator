import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { getPitch } from '~/utils/get-pitch';
import { pressKey, releaseKey, type PianoKey } from '~/store/piano-keys';
import type { MouseEvent as ReactMouseEvent } from 'react';
import type { Player } from 'tone';

export const usePianoKeys = () => {
  const audioPlayers = useAppSelector((state) => state.audio.players);
  const pianoKeys = useAppSelector((state) => state.pianoKeys);
  const dispatch = useAppDispatch();

  const pressPianoKey = (event: KeyboardEvent | ReactMouseEvent) => {
    if (!audioPlayers) {
      return;
    }

    const keyId = getPianoKeyId(event);

    if (!keyId) {
      return;
    }

    const pianoKey = findPianoKeyById(keyId);

    if (!pianoKey || pianoKey.isPressed) {
      return;
    }

    const audioPlayer = audioPlayers.player(getPitch(pianoKey));

    if (!audioPlayer) {
      return;
    }

    playPitch(audioPlayer);
    dispatch(pressKey(keyId));
  };

  const findPianoKeyById = (keyId: PianoKey['id']) => {
    return pianoKeys.find((pianoKey) => pianoKey.id === keyId);
  };

  const playPitch = (audioPlayer: Player) => {
    audioPlayer.toDestination().start();
  };

  const releasePianoKey = (event: KeyboardEvent | ReactMouseEvent) => {
    if (!audioPlayers) {
      return;
    }

    const keyId = getPianoKeyId(event);

    if (keyId) {
      dispatch(releaseKey(keyId));
    }
  };

  return { pianoKeys, pressPianoKey, releasePianoKey };
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
