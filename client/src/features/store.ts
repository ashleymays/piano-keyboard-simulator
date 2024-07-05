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
          ignoredPaths: ['audio.current', 'audio.cached'],
          ignoredActions: ['audio/load/fulfilled']
        }
      })
  });
};

export const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof combinedReducer>;
