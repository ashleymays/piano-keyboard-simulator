import { Player } from 'tone';
import { keysMap } from '~/common/keys-map';

const currentlyPlayedKeys = [];

/** @param {MouseEvent|KeyboardEvent} event */
export function endNote(event) {
  const computerKey = getComputerKeyByEvent(event);
  const index = currentlyPlayedKeys.indexOf(computerKey);

  if (index !== -1) {
    currentlyPlayedKeys.splice(index, 1);
    removePressedPianoKeyColor(computerKey);
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

  console.log(event.target);

  if (pitch && !currentlyPlayedKeys.includes(computerKey)) {
    playNoteAtPitch(pitch, audioSamples);
    addPressedPianoKeyColor(computerKey);
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

/**
 * Sets the background color of the piano key being played.
 * Needed for the keydown event.
 *
 * @param {string}
 */
function addPressedPianoKeyColor(computerKey) {
  const pianoKeyElement = document.querySelector(
    `button[value="${computerKey}"]`
  );
  pianoKeyElement.classList.add('pressed-piano-key');
}

/**
 * Resets the background color of the piano key being played.
 * Needed for the keyup event.
 *
 * @param {string}
 */
function removePressedPianoKeyColor(computerKey) {
  const pianoKeyElement = document.querySelector(
    `button[value="${computerKey}"]`
  );
  pianoKeyElement.classList.remove('pressed-piano-key');
}
