import { useAppSelector, useAppDispatch } from '~/features/hooks';
import { loadAudioSamples } from './slice';

export const useAudio = () => {
  const audioPlayers = useAppSelector((state) => state.audio.players);
  const dispatch = useAppDispatch();

  const loadAudio = async (instrument: string) => {
    await dispatch(loadAudioSamples(instrument));
  };

  return { audioPlayers, loadAudio };
};
