import { Provider } from 'react-redux';
import { Keyboard } from './components/keyboard';
import { Notifications } from './components/notifications';
import { Modal } from './components/modal';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <Keyboard />
        <Modal />
      </main>
      <Notifications />
    </Provider>
  );
};
