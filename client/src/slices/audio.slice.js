/* eslint no-param-reassign: 0 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAudioBuffers } from '~/lib/get-audio';

export const getAudio = createAsyncThunk(
  'audio/getAudio',
  async (instrumentDirectory) => {
    const response = await getAudioBuffers(instrumentDirectory);
    return JSON.stringify(response._buffers);
  }
);

const initialState = {
  buffers: {},
  isLoading: false,
  error: null
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAudio.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAudio.fulfilled, (state, action) => {
      state.isLoading = false;
      state.buffers = action.payload;
    });
    builder.addCase(getAudio.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  }
});

export const audioReducer = audioSlice.reducer;
