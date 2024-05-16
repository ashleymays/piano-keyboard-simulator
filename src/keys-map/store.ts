import { configureStore } from '@reduxjs/toolkit';
import { keysMapReducer } from './slice';

export const store = configureStore({
  reducer: {
    keysMap: keysMapReducer
  }
});
