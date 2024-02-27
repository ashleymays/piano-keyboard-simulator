import { configureStore } from '@reduxjs/toolkit';
import { audioReducer } from './slices/audio.slice';

export const store = configureStore({
  reducer: {
    audio: audioReducer
  }
});
