import { useSelector } from 'react-redux';
import { Player } from 'tone';
import type { RootState } from '~/features/store';

export const useAudioSamples = () => {
  const audioSamples = useSelector((state: RootState) => state.audio.samples);

  const playNoteAtPitch = (pitch: string) => {
    const player = new Player().toDestination();
    player.buffer = audioSamples.get(pitch);
    player.start();
  };

  return [audioSamples, playNoteAtPitch] as const;
};
