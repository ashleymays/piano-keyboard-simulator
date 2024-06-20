import { useEffect } from 'react';
import toast, { useToasterStore } from 'react-hot-toast';

export const useNotificationLimit = () => {
  const { toasts } = useToasterStore();

  const limitNotifications = () => {
    const LIMIT = 1;

    toasts
      .filter((notification) => notification.visible)
      .filter((_, index) => index >= LIMIT)
      .forEach((notification) => toast.dismiss(notification.id));
  };

  useEffect(() => {
    limitNotifications();
  }, [toasts]);
};
