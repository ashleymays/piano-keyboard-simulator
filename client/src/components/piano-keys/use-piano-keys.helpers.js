import { Player } from 'tone';
import { keysMap } from '~/common/keys-map';

export function getPitchByEvent(event) {
  const pianoKey = keysMap.get(event.key);
  return pianoKey ? `${pianoKey.noteName}${pianoKey.octave}` : null;
}

export function playNote(pitch, audioSamples) {
  const player = new Player().toDestination();
  player.buffer = audioSamples.get(pitch);
  player.start();
}
