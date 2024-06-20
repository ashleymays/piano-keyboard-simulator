import { Toaster } from 'react-hot-toast';
import { useNotifications } from './use-notifications';

export const Notifications = () => {
  useNotifications();

  return (
    <Toaster
      position="bottom-center"
      containerClassName="notification-body"
    />
  );
};
