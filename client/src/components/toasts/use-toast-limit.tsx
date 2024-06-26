import { useEffect } from 'react';
import globalToast, { useToasterStore } from 'react-hot-toast';

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
