import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const close = () => {
    setIsOpen(false);
  };

  return { isOpen, close };
};
