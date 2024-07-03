import { useAppDispatch, useAppSelector } from '~/features/hooks';
import { useAudio } from '~/features/audio';
import { toggleKeyPress, type PianoKey } from '~/features/piano-keys';
import type { Player } from 'tone';

export const usePianoKeyActions = () => {
  const { audioPlayers } = useAudio();
  const pianoKeys = useAppSelector((state) => state.pianoKeys);
  const dispatch = useAppDispatch();

  const pressPianoKey = (keyId: PianoKey['id']) => {
    if (!audioPlayers) {
      return;
    }

    const pianoKey = findPianoKeyById(keyId);

    if (!pianoKey || pianoKey.isPressed) {
      return;
    }

    const audioPlayer = audioPlayers.player(getPitch(pianoKey));

    if (!audioPlayer) {
      return;
    }

    playPitch(audioPlayer);
    toggleKey(keyId);
  };

  const findPianoKeyById = (keyId: PianoKey['id']) => {
    return pianoKeys.find((pianoKey) => pianoKey.id === keyId);
  };

  const getPitch = (pianoKey: PianoKey) => {
    return `${pianoKey.note}${pianoKey.octave}`;
  };

  const playPitch = (audioPlayer: Player) => {
    audioPlayer.toDestination().start();
  };

  const releasePianoKey = (keyId: PianoKey['id']) => {
    if (audioPlayers) {
      toggleKey(keyId);
    }
  };

  const toggleKey = (keyId: PianoKey['id']) => {
    dispatch(toggleKeyPress(keyId));
  };

  return { pressPianoKey, releasePianoKey };
};
