import { useEffect } from 'react';
import globalToast, { useToasterStore } from 'react-hot-toast';

/**
 * Allows only 1 toast to appear on the screen at a time.
 * 
 * @hook
 */
export const useToastLimit = () => {
  const { toasts } = useToasterStore();

  const limitToasts = () => {
    const LIMIT = 1;

    toasts
      .filter((toast) => toast.visible)
      .filter((_, index) => index >= LIMIT)
      .forEach((toast) => globalToast.dismiss(toast.id));
  };

  useEffect(() => {
    limitToasts();
  }, [toasts]);
};
