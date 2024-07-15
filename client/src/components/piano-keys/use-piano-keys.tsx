import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { getPitch } from '~/utils/get-pitch';
import { pressKey, releaseKey } from '~/store/piano-keys';
import type { MouseEvent as ReactMouseEvent } from 'react';
import type { Player } from 'tone';
import type { PianoKey } from '~/store/piano-keys';

/**
 * Behavior for playing and releasing the keys on the keyboard.
 * 
 * @hook
 */
export const usePianoKeys = () => {
  const audioPlayers = useAppSelector((state) => state.audio.players);
  const pianoKeys = useAppSelector((state) => state.pianoKeys);
  const dispatch = useAppDispatch();

  /**
   * Plays a key on the keyboard.
   * 
   * There must be an instrument selected (as in, available audio to play)
   * in order to play a piano key.
   * 
   * Also, the computer key that's pressed must be a valid key on the piano.
   * 
   * For example, the `Shift` key does not map to a piano key, so nothing happens.
   */
  const pressPianoKey = (event: KeyboardEvent | ReactMouseEvent) => {
    if (!audioPlayers) {
      return;
    }

    const keyId = getPianoKeyId(event);

    if (!keyId) {
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

  const playPitch = (audioPlayer: Player) => {
    audioPlayer.toDestination().start();
  };

  /**
   * Releases a key on the keyboard.
   */
  const releasePianoKey = (event: KeyboardEvent | ReactMouseEvent) => {
    if (!audioPlayers) {
      return;
    }

    const keyId = getPianoKeyId(event);

    if (keyId) {
      dispatch(releaseKey(keyId));
    }
  };

  return { pianoKeys, pressPianoKey, releasePianoKey };
};

const getPianoKeyId = (event: KeyboardEvent | ReactMouseEvent) => {
  if (isKeyboardEvent(event)) {
    return event.key.toLowerCase();
  }

  const keyId = (event.target as HTMLInputElement).value;

  return keyId ? keyId.toLowerCase() : null;
};

const isKeyboardEvent = (
  event: KeyboardEvent | ReactMouseEvent
): event is KeyboardEvent => {
  return (event as KeyboardEvent).key !== undefined;
};
