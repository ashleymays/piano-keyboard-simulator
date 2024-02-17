import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'electric-piano'
};

/* eslint no-param-reassign: 0 */
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
