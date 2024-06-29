import { useEffect, type MouseEvent as ReactMouseEvent } from 'react';
import { toast } from 'react-hot-toast';
import { togglePress, type PianoKey } from '~/features/piano-keys';
import { useAppSelector, useAppDispatch } from '~/features/store';

type PianoKeyEvent = KeyboardEvent | ReactMouseEvent<HTMLDivElement>;

export const usePianoKeys = () => {
  const audioPlayers = useAppSelector((state) => state.audio.players);
  const pianoKeys = useAppSelector((state) => state.pianoKeys);
  const dispatch = useAppDispatch();

  const pressPianoKey = (event: PianoKeyEvent) => {
    if (!audioPlayers) {
      toast.error('Audio is not available. Is there an instrument selected?');
      return;
    }

    const keyId = getPianoKeyId(event);

    if (!keyId) {
      return;
    }

    const pianoKey = pianoKeys.find((pianoKey) => pianoKey.id === keyId);

    if (!pianoKey || pianoKey.isPressed) {
      return;
    }

    playNote(pianoKey);
    dispatch(togglePress(keyId));
  };

  const playNote = (pianoKey: PianoKey) => {
    const pitch = `${pianoKey.note}${pianoKey.octave}`;
    const audioPlayer = audioPlayers.player(pitch);

    if (audioPlayer) {
      audioPlayer.toDestination().start();
    }
  };

  const releasePianoKey = (event: PianoKeyEvent) => {
    if (!audioPlayers) {
      return;
    }

    const keyId = getPianoKeyId(event);

    if (keyId) {
      dispatch(togglePress(keyId));
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', pressPianoKey);
    document.addEventListener('keyup', releasePianoKey);

    return () => {
      document.removeEventListener('keydown', pressPianoKey);
      document.removeEventListener('keyup', releasePianoKey);
    };
  }, [pianoKeys, audioPlayers]);

  return { pianoKeys, pressPianoKey, releasePianoKey };
};

const getPianoKeyId = (event: PianoKeyEvent) => {
  if (isKeyboardEvent(event)) {
    return event.key.toLowerCase();
  }

  const keyId = (event.target as HTMLInputElement).value;

  return keyId ? keyId.toLowerCase() : null;
};

const isKeyboardEvent = (event: PianoKeyEvent): event is KeyboardEvent => {
  return (event as KeyboardEvent).key !== undefined;
};
