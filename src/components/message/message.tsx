import { Toaster } from 'react-hot-toast';

export const Message = () => {
  return (
    <Toaster
      position="bottom-center"
      containerClassName="message-body"
    />
  );
};
