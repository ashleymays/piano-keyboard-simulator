import { Player, type ToneAudioBuffers } from 'tone';
import type { KeysMap } from '~/features/keys-map';

const currentlyPlayedKeys = [];

export const endNote = (event: KeyboardEvent) => {
  const computerKey = event.key;
  const index = currentlyPlayedKeys.indexOf(computerKey);

  if (index !== -1) {
    currentlyPlayedKeys.splice(index, 1);
    removePressedPianoKeyColor(computerKey);
  }
};

const removePressedPianoKeyColor = (computerKey: string) => {
  const pianoKeyElement = document.querySelector(
    `button[value="${computerKey}"]`
  );
  pianoKeyElement.classList.remove('pressed-piano-key');
};

type PlayNoteProps = {
  event: KeyboardEvent;
  audioSamples: ToneAudioBuffers;
  keysMap: KeysMap;
};

export const playNote = ({ event, audioSamples, keysMap }: PlayNoteProps) => {
  const computerKey = event.key;
  const pitch = getPitch(keysMap, computerKey);

  if (pitch && !currentlyPlayedKeys.includes(computerKey)) {
    playNoteAtPitch(pitch, audioSamples);
    addPressedPianoKeyColor(computerKey);
    currentlyPlayedKeys.push(computerKey);
  }
};

const getPitch = (keysMap: KeysMap, computerKey: string) => {
  const pianoKey = keysMap.find((pianoKey) => pianoKey.id === computerKey);

  if (!pianoKey) {
    return null;
  }

  const { note, octave } = pianoKey;

  return `${note}${octave}`;
};

const playNoteAtPitch = (pitch: string, audioSamples: ToneAudioBuffers) => {
  const player = new Player().toDestination();
  player.buffer = audioSamples.get(pitch);
  player.start();
};

const addPressedPianoKeyColor = (computerKey: string) => {
  const pianoKeyElement = document.querySelector(
    `button[value="${computerKey}"]`
  );
  pianoKeyElement.classList.add('pressed-piano-key');
};
