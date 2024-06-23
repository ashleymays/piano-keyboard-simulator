import { Player } from 'tone';
import { useAppSelector, useAppDispatch } from '~/features/store';
import { loadAudioSamples } from '~/features/audio';

export const useAudioSamples = () => {
  const audioSamples = useAppSelector((state) => state.audio.samples);
  const dispatch = useAppDispatch();

  const playAudio = (pitch: string) => {
    const player = new Player().toDestination();
    player.buffer = audioSamples.get(pitch);
    player.start();
  };

  const loadAudio = (instrument: string) => {
    return dispatch(loadAudioSamples(instrument));
  };

  return { audioSamples, playAudio, loadAudio };
};
