import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'electric-piano'
};

export const instrumentSlice = createSlice({
  name: 'instrument',
  initialState,
  reducers: {
    selectInstrument: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { selectInstrument } = instrumentSlice.actions;

export const instrumentReducer = instrumentSlice.reducer;
