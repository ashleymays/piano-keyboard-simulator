import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAudioSamples } from './api';
import type { ToneAudioBuffers } from 'tone';

export const loadAudioSamples = createAsyncThunk(
  'audio/load',
  (instrument: string) => getAudioSamples(instrument)
);

type Audio = {
  samples: ToneAudioBuffers | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: Audio = {
  samples: null,
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
      state.samples = action.payload;
    });
    builder.addCase(loadAudioSamples.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  }
});

export const reducer = slice.reducer;
