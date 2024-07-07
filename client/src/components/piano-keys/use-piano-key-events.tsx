import { useEffect, type MouseEvent as ReactMouseEvent } from 'react';
import { usePianoKeyActions } from './use-piano-key-actions';

export const usePianoKeyEvents = () => {
  const { pressPianoKey, releasePianoKey } = usePianoKeyActions();

  const onPianoKeyPress = (event: KeyboardEvent | ReactMouseEvent) => {
    const keyId = getPianoKeyId(event);

    if (keyId) {
      pressPianoKey(keyId);
    }
  };

  const onPianoKeyRelease = (event: KeyboardEvent | ReactMouseEvent) => {
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
  }, [onPianoKeyPress, onPianoKeyRelease]);

  return { onPianoKeyPress, onPianoKeyRelease };
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
