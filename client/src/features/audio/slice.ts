import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAudioSamples } from './api';

export const loadAudioSamples = createAsyncThunk(
  'audio/load',
  (instrument: string) => getAudioSamples(instrument)
);

const initialState = {
  samples: {},
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
