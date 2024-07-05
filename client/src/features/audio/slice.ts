import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAudio } from './api';
import type { Players } from 'tone';
import type { RootState } from '~/features/store';

export const loadAudioSamples = createAsyncThunk<
  Players,
  string,
  { state: RootState }
>('audio/load', async (instrument, { getState }) => {
  const state = getState();

  if (state.audio.cached[instrument]) {
    return state.audio.cached[instrument];
  }

  return getAudio(instrument);
});

type Audio = {
  cached: {
    [instrument: string]: Players;
  };
  current: Players | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: Audio = {
  cached: {},
  current: null,
  isLoading: false,
  error: null
};

const slice = createSlice({
  name: 'audio',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAudioSamples.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loadAudioSamples.fulfilled, (state, action) => {
      state.isLoading = false;
      state.current = action.payload;

      const instrument = action.meta.arg;
      state.cached[instrument] = action.payload;
    });
    builder.addCase(loadAudioSamples.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  }
});

export const reducer = slice.reducer;
