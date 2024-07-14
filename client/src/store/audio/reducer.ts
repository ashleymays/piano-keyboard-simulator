import {
  createAsyncThunk,
  createReducer,
  type Reducer
} from '@reduxjs/toolkit';
import { getAudio } from './api';
import type { Players } from 'tone';

export const loadAudioSamples = createAsyncThunk<Players, string, any>(
  'audio/load',
  (instrument) => getAudio(instrument)
);

type AudioState = {
  players: Players | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: AudioState = {
  players: null,
  isLoading: false,
  error: null
};

/**
 * Taken from the Redux Toolkit source code.
 *
 * There is an issue with typing right now, so this is needed to get rid of
 * TS errors.
 *
 * @link https://github.com/reduxjs/redux-toolkit/issues/4448
 *
 * @todo Remove when the issue is resolved
 */
type AudioReducer = Reducer<AudioState> & {
  getInitialState: () => AudioState;
};

export const reducer: AudioReducer = createReducer<AudioState>(
  initialState,
  (builder) => {
    builder.addCase(loadAudioSamples.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loadAudioSamples.fulfilled, (state, action) => {
      state.isLoading = false;
      state.players = action.payload;
    });
    builder.addCase(loadAudioSamples.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || null;
    });
  }
);
