import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getInstruments } from './api';

export const loadInstruments = createAsyncThunk(
  'instruments/loadInstruments',
  () => getInstruments()
);

const initialState = {
  instruments: [],
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
      state.instruments = action.payload;
    });
    builder.addCase(loadInstruments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
});

export const reducer = slice.reducer;
