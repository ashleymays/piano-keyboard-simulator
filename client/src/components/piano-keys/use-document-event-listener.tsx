import { useEffect } from 'react';

type KeyboardEventHandler = (event: KeyboardEvent) => void;

/**
 * Links an event listener to the document object.
 *
 * @hook
 */
export const useDocumentEventListener = (
  type: string,
  handler: KeyboardEventHandler
) => {
  useEffect(() => {
    document.addEventListener(type, handler);

    return () => {
      document.removeEventListener(type, handler);
    };
  }, [handler]);
};
