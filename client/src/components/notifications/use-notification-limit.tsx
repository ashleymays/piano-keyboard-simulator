import { useEffect } from 'react';
import globalToast, { useToasterStore } from 'react-hot-toast';

/**
 * Allows only 1 toast to appear on the screen at a time.
 *
 * @hook
 */
export const useNotificationLimit = () => {
  const { toasts } = useToasterStore();

  useEffect(() => {
    const limit = 1;
  
    toasts
      .filter((toast) => toast.visible)
      .filter((_, index) => index >= limit)
      .forEach((toast) => globalToast.dismiss(toast.id));
  }, [toasts]);
};
