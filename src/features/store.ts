import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as keysMapReducer } from './keys-map';

export const combinedReducer = combineReducers({
  keysMap: keysMapReducer
});

export type RootState = ReturnType<typeof combinedReducer>;

export const store = configureStore({
  reducer: combinedReducer
});
