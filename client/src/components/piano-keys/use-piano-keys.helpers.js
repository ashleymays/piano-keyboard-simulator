import { Player } from 'tone';
import { keysMap } from '~/common/keys-map';
import { reviver } from '~/common/json-reviver';

export function getPitchByEvent(event) {
  const pianoKey = keysMap.get(event.key);
  return pianoKey ? `${pianoKey.noteName}${pianoKey.octave}` : null;
}

export function playNote(pitch, audioSamples) {
  const player = new Player();
  const playableSamples = JSON.parse(audioSamples, reviver);
  player.buffer = playableSamples.get(pitch).buffer;
  player.play();
}
