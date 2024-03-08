import { configureStore } from '@reduxjs/toolkit';
import { audioReducer } from './audio.slice';

export const store = configureStore({
  reducer: {
    audio: audioReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
