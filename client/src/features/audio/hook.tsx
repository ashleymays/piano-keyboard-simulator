import { useAppSelector, useAppDispatch } from '~/features/hooks';
import { loadAudioSamples } from './slice';

export const useAudio = () => {
  const audioPlayers = useAppSelector((state) => state.audio.players);
  const dispatch = useAppDispatch();

  const loadAudio = async (instrument: string) => {
    await dispatch(loadAudioSamples(instrument));
  };

  const playNote = (pitch: string) => {
    if (!audioPlayers) {
      return;
    }

    const audioPlayer = audioPlayers.player(pitch);

    if (!audioPlayer) {
      throw new Error(`Invalid pitch on piano key: ${pitch}`);
    }

    audioPlayer.toDestination().start();
  };

  return { audioPlayers, loadAudio, playNote };
};
