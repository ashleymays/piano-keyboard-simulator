import { configureStore } from "@reduxjs/toolkit";
import soundEffectsReducer from "./slices/soundEffectsSlice";

const store = configureStore({
  reducer: {
    soundEffects: soundEffectsReducer,
  },
});

export default store;
