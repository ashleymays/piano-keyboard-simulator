import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app.tsx';
import { Provider } from 'react-redux';
import { store } from './features/store.ts';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
