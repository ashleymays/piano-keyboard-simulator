import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './app';
import { store } from './features/audio.store';
import './styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
