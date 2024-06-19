import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as pianoKeysReducer } from './piano-keys';

export const combinedReducer = combineReducers({
  pianoKeys: pianoKeysReducer
});

export type RootState = ReturnType<typeof combinedReducer>;

export const store = configureStore({
  reducer: combinedReducer
});
