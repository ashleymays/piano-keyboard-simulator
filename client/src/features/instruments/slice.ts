import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getInstruments } from './api';

export const loadInstruments = createAsyncThunk(
  'instruments/load',
  () => getInstruments()
);

const initialState = {
  names: [],
  isLoading: false,
  error: null
};

const slice = createSlice({
  name: 'instruments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadInstruments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loadInstruments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.names = action.payload;
    });
    builder.addCase(loadInstruments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  }
});

export const reducer = slice.reducer;
