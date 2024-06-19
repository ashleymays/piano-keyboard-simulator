import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as keysMapReducer } from './keys-map';
import { reducer as audioReducer } from './audio';

export const combinedReducer = combineReducers({
  keysMap: keysMapReducer,
  audio: audioReducer
});

export type RootState = ReturnType<typeof combinedReducer>;

export const store = configureStore({
  reducer: combinedReducer
});
