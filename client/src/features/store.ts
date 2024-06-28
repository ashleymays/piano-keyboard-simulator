import { useDispatch, useSelector } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as keysMapReducer } from './piano-keys';
import { reducer as audioReducer } from './audio';
import { reducer as instrumentsReducer } from './instruments';

const combinedReducer = combineReducers({
  pianoKeys: keysMapReducer,
  audio: audioReducer,
  instruments: instrumentsReducer
});

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ['audio.players'],
        ignoredActions: ['audio/load/fulfilled']
      }
    })
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

type RootState = ReturnType<typeof combinedReducer>;
export const useAppSelector = useSelector.withTypes<RootState>();
