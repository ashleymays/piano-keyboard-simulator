import { useEffect } from 'react';
import toast, { useToasterStore } from 'react-hot-toast';

export const useNotifications = () => {
  const { toasts } = useToasterStore();

  const limitNotifications = () => {
    const TOAST_LIMIT = 1;

    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  };

  useEffect(() => {
    limitNotifications();
  }, [toasts]);
};
