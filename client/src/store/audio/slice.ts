import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
      state.players = action.payload;
    });
    builder.addCase(loadAudioSamples.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || null;
    });
  }
});

export const reducer = slice.reducer;
