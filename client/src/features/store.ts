import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as keysMapReducer } from './piano-keys';
import { reducer as audioReducer } from './audio';
import { reducer as instrumentsReducer } from './instruments';

const combinedReducer = combineReducers({
  pianoKeys: keysMapReducer,
  audio: audioReducer,
  instruments: instrumentsReducer
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    preloadedState,
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredPaths: ['audio.players'],
          ignoredActions: ['audio/load/fulfilled']
        }
      })
  });
};

export const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
