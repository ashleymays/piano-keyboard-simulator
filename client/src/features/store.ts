import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as pianoKeysReducer } from './piano-keys';
import { reducer as audioReducer } from './audio';

const combinedReducer = combineReducers({
  pianoKeys: pianoKeysReducer,
  audio: audioReducer
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
