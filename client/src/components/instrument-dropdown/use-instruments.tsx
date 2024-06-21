import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { loadAudioSamples } from '~/features/audio';
import { loadInstruments } from '~/features/instruments';
import type { RootState, AppDispatch } from '~/features/store';

export const useInstruments = () => {
  const [currentInstrument, setCurrentInstrument] = useState(null);
  const instruments = useSelector(
    (state: RootState) => state.instruments.names
  );

  const dispatch = useDispatch<AppDispatch>();

  const loadInstrumentNames = (): Promise<string[]> => {
    return dispatch(loadInstruments()).unwrap();
  };

  const loadAudio = async (newInstrument: string) => {
    setCurrentInstrument(newInstrument);
    await dispatch(loadAudioSamples(newInstrument)).unwrap();
  };

  const createAsyncHandler =
    (asyncFn: (any) => Promise<void>) =>
    async (params = undefined) => {
      try {
        toast.loading('Loading...');
        await asyncFn(params);
        toast.success('Loaded successfully');
      } catch (error) {
        console.log(error);
        toast.error(
          'There was an issue getting the requested resource. Please reload the page and try again.'
        );
      }
    };

  const handleAudio = createAsyncHandler(async (newInstrument: string) => {
    await loadAudio(newInstrument);
  });

  const initInstruments = createAsyncHandler(async () => {
    const instrumentNames = await loadInstrumentNames();
    await loadAudio(instrumentNames[0]);
  });

  useEffect(() => {
    initInstruments();
  }, []);

  return [instruments, currentInstrument, handleAudio] as const;
};
