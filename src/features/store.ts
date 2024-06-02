import { configureStore } from '@reduxjs/toolkit';
import { keysMapReducer } from './keys-map/slice';

export const store = configureStore({
  reducer: {
    keysMap: keysMapReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});
