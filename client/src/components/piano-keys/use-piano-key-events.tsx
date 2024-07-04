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

  /**
   * The `onKeyDown` and `onKeyUp` events are used when the user is playing with
   * their computer keyboard.
   *
   * @param event
   */
  const onKeyDown = (event: KeyboardEvent) => {
    onPianoKeyPress(event);
  };

  const onKeyUp = (event: KeyboardEvent) => {
    onPianoKeyRelease(event);
  };

  /**
   * The `onMouseDown` and `onMouseUp` events are used when the user is playing with
   * their mouse.
   *
   * Since we also need to release the piano key when the user drags their mouse
   * over the keyboard, or when the mouse is not over the piano keys, we release
   * the piano key during `onMouseOver`, `onMouseOut`, and `onMouseLeave` events.
   *
   * @param event
   */
  const onMouseDown = (event: ReactMouseEvent) => {
    onPianoKeyPress(event);
  };

  const onMouseUp = (event: ReactMouseEvent) => {
    onPianoKeyRelease(event);
  };

  const onMouseOver = (event: ReactMouseEvent) => {
    onPianoKeyRelease(event);
  };

  const onMouseOut = (event: ReactMouseEvent) => {
    onPianoKeyRelease(event);
  };

  const onMouseLeave = (event: ReactMouseEvent) => {
    onPianoKeyRelease(event);
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, [onKeyDown, onKeyUp]);

  return { onMouseDown, onMouseUp, onMouseOver, onMouseOut, onMouseLeave };
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
