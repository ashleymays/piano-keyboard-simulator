import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const close = () => {
    setIsOpen(false);
  };

  return { isOpen, close };
};
