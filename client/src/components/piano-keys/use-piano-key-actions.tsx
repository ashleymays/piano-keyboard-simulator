import { useAppDispatch, useAppSelector } from '~/features/hooks';
import { useAudio } from '~/features/audio';
import { toggleKeyPress, type PianoKey } from '~/features/piano-keys';

export const usePianoKeyActions = () => {
  const { audioPlayers, playNote } = useAudio();
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

    playNote(getPitch(pianoKey));
    toggleKey(keyId);
  };

  const getPitch = (pianoKey: PianoKey) => {
    return `${pianoKey.note}${pianoKey.octave}`;
  };

  const findPianoKeyById = (keyId: PianoKey['id']) => {
    return pianoKeys.find((pianoKey) => pianoKey.id === keyId);
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
