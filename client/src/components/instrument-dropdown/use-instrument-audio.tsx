import { useAppDispatch } from '~/features/hooks';
import { loadAudioSamples } from '~/features/audio';

export const useInstrumentAudio = () => {
  const dispatch = useAppDispatch();

  const loadAudio = async (instrument: string) => {
    await dispatch(loadAudioSamples(instrument));
  };

  return { loadAudio };
};
