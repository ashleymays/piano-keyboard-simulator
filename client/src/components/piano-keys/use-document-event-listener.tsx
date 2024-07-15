import { useEffect } from 'react';

type KeyboardEventHandler = (event: KeyboardEvent) => void;

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
