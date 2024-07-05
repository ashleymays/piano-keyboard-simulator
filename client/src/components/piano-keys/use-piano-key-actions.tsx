import { useAppDispatch, useAppSelector } from '~/features/hooks';
import { pressKey, releaseKey, type PianoKey } from '~/features/piano-keys';
import type { Player } from 'tone';

export const usePianoKeyActions = () => {
  const audioPlayers = useAppSelector((state) => state.audio.current);
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
    dispatch(pressKey(keyId));
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
      dispatch(releaseKey(keyId));
    }
  };

  return { pressPianoKey, releasePianoKey };
};
