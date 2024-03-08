import { Player } from 'tone';
import { keysMap } from '~/common/keys-map';

const currentlyPlayedNotes = [];

export function getPitchByEvent(event) {
  const pianoKey = keysMap.get(event.key);
  return pianoKey ? `${pianoKey.noteName}${pianoKey.octave}` : null;
}

export function playNote(pitch, audioSamples) {
  if (!currentlyPlayedNotes.includes(pitch)) {
    playNoteAtPitch(pitch, audioSamples);
    currentlyPlayedNotes.push(pitch);
  }
}

function playNoteAtPitch(pitch, audioSamples) {
  const player = new Player().toDestination();
  player.buffer = audioSamples.get(pitch);
  player.start();
}

export function endNote(pitch) {
  const index = currentlyPlayedNotes.indexOf(pitch);

  if (index !== -1) {
    currentlyPlayedNotes.splice(index, 1);
  }
}
