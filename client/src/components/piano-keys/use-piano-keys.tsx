import { useEffect, type MouseEvent as ReactMouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { togglePress } from '~/features/keys-map';
import { useAudioSamples } from './use-audio-samples';
import type { RootState } from '~/features/store';

export type PianoKeyEvent = KeyboardEvent | ReactMouseEvent<HTMLButtonElement>;

export const usePianoKeys = () => {
  const [audioSamples, playAudio] = useAudioSamples();
  const keysMap = useSelector((state: RootState) => state.keysMap);
  const dispatch = useDispatch();

  const playPianoKey = (event: PianoKeyEvent) => {
    const keyId = getKeyIdByEvent(event);
    const pianoKey = keysMap.find((key) => key.id === keyId);

    if (!pianoKey || pianoKey.isPressed) {
      return;
    }

    const pitch = `${pianoKey.note}${pianoKey.octave}`;

    playAudio(pitch);
    dispatch(togglePress(keyId));
  };

  const releasePianoKey = (event: PianoKeyEvent) => {
    const keyId = getKeyIdByEvent(event);
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

  return [keysMap, playPianoKey, releasePianoKey] as const;
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
