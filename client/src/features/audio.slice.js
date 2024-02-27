/* eslint no-param-reassign: 0 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAudioBuffers } from './audio.api';

export const loadAudioSamples = createAsyncThunk(
  'audio/loadAudioSamples',
  async (instrumentDirectory) => {
    const response = await getAudioBuffers(instrumentDirectory);
    return JSON.stringify(response._buffers);
  }
);

const initialState = {
  audioSamples: {},
  isLoading: false,
  error: null
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAudioSamples.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loadAudioSamples.fulfilled, (state, action) => {
      state.isLoading = false;
      state.audioSamples = action.payload;
    });
    builder.addCase(loadAudioSamples.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  }
});

export const audioReducer = audioSlice.reducer;
