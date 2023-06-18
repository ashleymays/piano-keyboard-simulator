import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  soften: false,
  sustain: false,
};

const soundEffectsSlice = createSlice({
  name: "soundEffects",
  initialState,
  reducers: {
    toggleSoften: (state) => {
      state.soften = !state.soften;
    },
    toggleSustain: (state) => {
      state.sustain = !state.sustain;
    },
  },
});

export const { toggleSoften, toggleSustain } = soundEffectsSlice.actions;

export default soundEffectsSlice.reducer;
