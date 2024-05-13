import { useEffect } from 'react';

type UseComputerKeyboardProps = {
  handleKeyDown: (this: Document, event: KeyboardEvent) => void;
  handleKeyUp: (this: Document, event: KeyboardEvent) => void;
};

export const useComputerKeyboard = ({
  handleKeyDown,
  handleKeyUp
}: UseComputerKeyboardProps) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
};
