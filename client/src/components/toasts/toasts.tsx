import { Toaster } from 'react-hot-toast';
import { useToastLimit } from './use-toast-limit';

export const Toasts = () => {
  useToastLimit();

  return (
    <Toaster
      toastOptions={{
        error: {
          duration: Infinity
        }
      }}
      position="bottom-center"
      containerClassName="toast-body"
    />
  );
};
