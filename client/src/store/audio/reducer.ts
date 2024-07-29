import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { getAudioPlayers } from './api';
import type { Players } from 'tone';

export const loadAudio = createAsyncThunk<Players, string>(
  'audio/load',
  (instrument) => getAudioPlayers(instrument)
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

export const reducer = createReducer<AudioState>(initialState, (builder) => {
  builder.addCase(loadAudio.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(loadAudio.fulfilled, (state, action) => {
    state.isLoading = false;
    state.players = action.payload;
  });
  builder.addCase(loadAudio.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.error.message || null;
  });
});
