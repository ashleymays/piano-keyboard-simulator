import { Keyboard } from './components/keyboard';
import { Toasts } from './components/toasts';
import { Modal } from './components/modal';

export const App = () => {
  return (
    <main>
      <Keyboard />
      <Toasts />
      <Modal />
    </main>
  );
};
