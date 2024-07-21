import { useEffect } from 'react';

type KeyboardEventHandler = (event: KeyboardEvent) => void;

/**
 * Links an event listener to the document object.
 *
 * @hook
 */
export const useKeyboardEventListener = (
  type: 'keydown' | 'keyup',
  handler: KeyboardEventHandler
) => {
  useEffect(() => {
    document.addEventListener(type, handler);

    return () => {
      document.removeEventListener(type, handler);
    };
  }, [handler]);
};
