import { Toaster } from 'react-hot-toast';
import { useNotificationLimit } from './use-notification-limit';

export const Notifications = () => {
  useNotificationLimit();

  return (
    <Toaster
      position="bottom-center"
      containerClassName="notification-body"
    />
  );
};
