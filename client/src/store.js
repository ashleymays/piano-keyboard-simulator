import { configureStore } from '@reduxjs/toolkit';
import { instrumentReducer } from './slices/instrument.slice';

export const store = configureStore({
  reducer: {
    instrument: instrumentReducer
  }
});
