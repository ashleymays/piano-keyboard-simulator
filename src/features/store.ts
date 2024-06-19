import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as pianoKeysReducer } from './piano-keys/slice';

export const combinedReducer = combineReducers({
  pianoKeys: pianoKeysReducer
});

export type RootState = ReturnType<typeof combinedReducer>;

export const store = configureStore({
  reducer: combinedReducer
});
