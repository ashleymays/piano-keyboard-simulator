import { createRoot } from 'react-dom/client';
import { App } from './app';
import { store } from './store';
import { Provider } from 'react-redux';
import './styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
