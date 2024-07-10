import { useEffect } from 'react';

type UseComputerKeyboardProps = {
  onKeyDown: (event: KeyboardEvent) => void;
  onKeyUp: (event: KeyboardEvent) => void;
};

export const useComputerKeyboard = ({
  onKeyDown,
  onKeyUp
}: UseComputerKeyboardProps) => {
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, [onKeyDown, onKeyUp]);
};
