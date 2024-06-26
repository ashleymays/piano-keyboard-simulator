import { Toaster } from 'react-hot-toast';
import { useToastLimit } from './use-toast-limit';

export const Toasts = () => {
  useToastLimit();

  return (
    <Toaster
      position="bottom-center"
      containerClassName="toast-body"
    />
  );
};
