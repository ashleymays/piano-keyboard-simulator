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
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ['audio.samples'],
        ignoredActions: ['audio/load/fulfilled']
      }
    })
});

export type AppDispatch = typeof store.dispatch;
