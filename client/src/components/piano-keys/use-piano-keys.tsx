import { useEffect, type MouseEvent as ReactMouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAudioSamples } from './use-audio-samples';
import { togglePress, type PianoKey } from '~/features/keys-map';
import type { RootState } from '~/features/store';

type MouseInputEvent = ReactMouseEvent<HTMLButtonElement>;

export type PianoKeyEvent = KeyboardEvent | MouseInputEvent;

export const usePianoKeys = () => {
  const { audioSamples, playAudio } = useAudioSamples();
  const keysMap = useSelector((state: RootState) => state.keysMap);
  const dispatch = useDispatch();

  const toggleKeyPress = (keyId: PianoKey['id']) => {
    dispatch(togglePress(keyId));
  };

  const playPianoKey = (event: PianoKeyEvent) => {
    const keyId = getPianoKeyId(event);
    const pianoKey = keysMap.find((key) => key.id === keyId);

    if (!keyId || !pianoKey || pianoKey.isPressed) {
      return;
    }

    const pitch = `${pianoKey.note}${pianoKey.octave}`;

    playAudio(pitch);
    toggleKeyPress(keyId);
  };

  const releasePianoKey = (event: PianoKeyEvent) => {
    const keyId = getPianoKeyId(event);
    toggleKeyPress(keyId);
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
