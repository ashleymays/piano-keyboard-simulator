import { useEffect, type MouseEvent as ReactMouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Player } from 'tone';
import { togglePress, type PianoKey } from '~/features/keys-map';
import type { RootState } from '~/features/store';

type MouseInputEvent = ReactMouseEvent<HTMLButtonElement>;

export type PianoKeyEvent = KeyboardEvent | MouseInputEvent;

export const usePianoKeys = () => {
  const audioSamples = useSelector((state: RootState) => state.audio.samples);
  const keysMap = useSelector((state: RootState) => state.keysMap);
  const dispatch = useDispatch();

  const playPianoKey = (event: PianoKeyEvent) => {
    const keyId = getPianoKeyId(event);
    const pianoKey = keysMap.find((pianoKey) => pianoKey.id === keyId);

    if (!pianoKey || pianoKey.isPressed) {
      return;
    }

    const pitch = `${pianoKey.note}${pianoKey.octave}`;

    playAudio(pitch);
    toggleKeyPress(keyId);
  };

  const playAudio = (pitch: string) => {
    const player = new Player().toDestination();
    player.buffer = audioSamples.get(pitch);
    player.start();
  };

  const releasePianoKey = (event: PianoKeyEvent) => {
    const keyId = getPianoKeyId(event);
    toggleKeyPress(keyId);
  };

  const toggleKeyPress = (keyId: PianoKey['id']) => {
    dispatch(togglePress(keyId));
  };

  useEffect(() => {
    document.addEventListener('keydown', playPianoKey);
    document.addEventListener('keyup', releasePianoKey);

    return () => {
      document.removeEventListener('keydown', playPianoKey);
      document.removeEventListener('keyup', releasePianoKey);
    };
  }, [keysMap, audioSamples]);

  return { keysMap, playPianoKey, releasePianoKey };
};

const getPianoKeyId = (event: PianoKeyEvent) => {
  if (isKeyboardEvent(event)) {
    return event.key;
  }
  if (isMouseEvent(event)) {
    return event.currentTarget.value;
  }
  return null;
};

const isKeyboardEvent = (event: PianoKeyEvent): event is KeyboardEvent => {
  return (event as KeyboardEvent).key !== undefined;
};

const isMouseEvent = (event: PianoKeyEvent): event is MouseInputEvent => {
  return (event as MouseInputEvent).currentTarget !== undefined;
};
