import { useEffect, type MouseEvent as ReactMouseEvent } from 'react';
import { togglePress, type PianoKey } from '~/features/keys-map';
import { useAppSelector, useAppDispatch } from '~/features/store';

type MouseInputEvent = ReactMouseEvent<HTMLButtonElement>;

export type PianoKeyEvent = KeyboardEvent | MouseInputEvent;

export const usePianoKeys = () => {
  const audioPlayers = useAppSelector((state) => state.audio.players);
  const keysMap = useAppSelector((state) => state.keysMap);
  const dispatch = useAppDispatch();

  const pressPianoKey = (event: PianoKeyEvent) => {
    const keyId = getPianoKeyId(event);
    const pianoKey = keysMap.find((pianoKey) => pianoKey.id === keyId);

    if (!pianoKey || pianoKey.isPressed) {
      return;
    }

    playPianoKey(pianoKey);
  };

  const playPianoKey = (pianoKey: PianoKey) => {
    const pitch = `${pianoKey.note}${pianoKey.octave}`;

    audioPlayers.player(pitch).toDestination().start();

    pressKey(pianoKey.id);
  };

  const releasePianoKey = (event: PianoKeyEvent) => {
    pressKey(getPianoKeyId(event));
  };

  const pressKey = (keyId: PianoKey['id']) => {
    dispatch(togglePress(keyId));
  };

  useEffect(() => {
    document.addEventListener('keydown', pressPianoKey);
    document.addEventListener('keyup', releasePianoKey);

    return () => {
      document.removeEventListener('keydown', pressPianoKey);
      document.removeEventListener('keyup', releasePianoKey);
    };
  }, [keysMap, audioPlayers]);

  return { keysMap, pressPianoKey, releasePianoKey };
};

const getPianoKeyId = (event: PianoKeyEvent) => {
  if (isKeyboardEvent(event)) {
    return event.key.toLowerCase();
  }
  if (isMouseEvent(event)) {
    return event.currentTarget.value.toLowerCase();
  }
  return null;
};

const isKeyboardEvent = (event: PianoKeyEvent): event is KeyboardEvent => {
  return (event as KeyboardEvent).key !== undefined;
};

const isMouseEvent = (event: PianoKeyEvent): event is MouseInputEvent => {
  return (event as MouseInputEvent).currentTarget !== undefined;
};
