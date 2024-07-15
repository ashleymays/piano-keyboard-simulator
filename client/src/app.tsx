import { Provider } from 'react-redux';
import { Keyboard } from './components/keyboard';
import { Toasts } from './components/toasts';
import { Modal } from './components/modal';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <Keyboard />
        <Toasts />
        <Modal />
      </main>
    </Provider>
  );
};
