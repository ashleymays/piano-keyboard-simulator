import { Player } from 'tone';
import { keysMap } from '~/common/keys-map';

const currentlyPlayedKeys = [];

/** @param {string} computerKey */
export function endNote(computerKey) {
  const index = currentlyPlayedKeys.indexOf(computerKey);

  if (index !== -1) {
    currentlyPlayedKeys.splice(index, 1);
  }
}

/**
 * Plays a piano key if it is able to be played.
 *
 * @param {MouseEvent|KeyboardEvent} event
 * @param {Map<string, ToneAudioBuffer>} audioSamples
 */
export function playNote(event, audioSamples) {
  const computerKey = getComputerKeyByEvent(event);
  const pitch = getPitchByComputerKey(computerKey);

  if (pitch && !currentlyPlayedKeys.includes(computerKey)) {
    playNoteAtPitch(pitch, audioSamples);
    currentlyPlayedKeys.push(computerKey);
  }
}

/**
 * @param {MouseEvent|KeyboardEvent} event
 * @returns {string}
 */
function getComputerKeyByEvent(event) {
  return event.key || event.target.value;
}

/**
 * @param {string} computerKey
 * @returns {string?}
 */
function getPitchByComputerKey(computerKey) {
  const pianoKey = keysMap.get(computerKey);
  return pianoKey ? `${pianoKey.noteName}${pianoKey.octave}` : null;
}

/**
 * @param {string} pitch
 * @returns {Map<string, ToneAudioBuffer>} audioSamples
 */
function playNoteAtPitch(pitch, audioSamples) {
  const player = new Player().toDestination();
  player.buffer = audioSamples.get(pitch);
  player.start();
}
