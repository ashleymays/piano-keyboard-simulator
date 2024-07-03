import { useEffect } from 'react';
import { usePianoKeyActions } from './use-piano-key-actions';
import type { MouseEvent as ReactMouseEvent } from 'react';

type PianoKeyEvent = KeyboardEvent | ReactMouseEvent<HTMLElement>;

export const usePianoKeyInputs = () => {
  const { pressPianoKey, releasePianoKey } = usePianoKeyActions();

  const onPianoKeyPress = (event: PianoKeyEvent) => {
    const keyId = getPianoKeyId(event);

    if (keyId) {
      pressPianoKey(keyId);
    }
  };

  const onPianoKeyRelease = (event: PianoKeyEvent) => {
    const keyId = getPianoKeyId(event);

    if (keyId) {
      releasePianoKey(keyId);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onPianoKeyPress);
    document.addEventListener('keyup', onPianoKeyRelease);

    return () => {
      document.removeEventListener('keydown', onPianoKeyPress);
      document.removeEventListener('keyup', onPianoKeyRelease);
    };
  }, [pressPianoKey, releasePianoKey]);

  return { onPianoKeyPress, onPianoKeyRelease };
};

const getPianoKeyId = (event: PianoKeyEvent) => {
  if (isKeyboardEvent(event)) {
    return event.key.toLowerCase();
  }

  const keyId = (event.target as HTMLInputElement).value;

  return keyId ? keyId.toLowerCase() : null;
};

const isKeyboardEvent = (event: PianoKeyEvent): event is KeyboardEvent => {
  return (event as KeyboardEvent).key !== undefined;
};
