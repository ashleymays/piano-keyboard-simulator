import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { unwrapResult } from '@reduxjs/toolkit';
import { loadAudioSamples } from '~/features/audio';
import { loadInstruments } from '~/features/instruments';
import type { RootState, AppDispatch } from '~/features/store';

export const useInstruments = () => {
  const [currentInstrument, setCurrentInstrument] = useState(null);
  const instruments = useSelector(
    (state: RootState) => state.instruments.names
  );

  const dispatch = useDispatch<AppDispatch>();

  const loadInstrumentNames = async () => {
    const result = await dispatch(loadInstruments());
    unwrapResult(result);
    return result.payload;
  };

  const loadAudio = async (newInstrument: string) => {
    setCurrentInstrument(newInstrument);
    const result = await dispatch(loadAudioSamples(newInstrument));
    unwrapResult(result);
  };

  const loadInstrumentsAndAudio = async () => {
    const instrumentNames = await loadInstrumentNames();
    await loadAudio(instrumentNames[0]);
  };

  const createAsyncHandler =
    (handler: (any) => Promise<void>) =>
    async (params = null) => {
      try {
        toast.loading('Loading...');
        await handler(params);
        toast.success('Loaded successfully');
      } catch (error) {
        console.log(error);
        toast.error(
          'There was an issue getting the requested resource. Please reload the page and try again.'
        );
      }
    };

  const initInstruments = createAsyncHandler(async () => {
    await loadInstrumentsAndAudio();
  });

  const handleAudio = createAsyncHandler(async (newInstrument: string) => {
    await loadAudio(newInstrument);
  });

  useEffect(() => {
    initInstruments();
  }, []);

  return [instruments, currentInstrument, handleAudio] as const;
};
