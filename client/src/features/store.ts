import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as keysMapReducer } from './keys-map';
import { reducer as audioReducer } from './audio';
import { reducer as instrumentsReducer } from './instruments';

export const combinedReducer = combineReducers({
  keysMap: keysMapReducer,
  audio: audioReducer,
  instruments: instrumentsReducer
});

export type RootState = ReturnType<typeof combinedReducer>;

export const store = configureStore({
  reducer: combinedReducer
});

export type AppDispatch = typeof store.dispatch;
