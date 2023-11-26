import pianoKeys from 'src/data/pianoKeys';

const audioContext = new AudioContext();
const destination = audioContext.createMediaStreamDestination();
const currentlyPressedKeys = [];
const gainNodesUsed = {};

/**
 * Plays the note at a computer key/piano key if it is allowed to be played.
 */
export function playNote(event, buffers) {
    audioContext.resume();
    const computerKey = getComputerKeyByEvent(event);

    if (canPlayNote(computerKey)) {
        const pitch = getPitchByComputerKey(computerKey);
        playNoteAtPitch(pitch, buffers);
        addComputerKeyToPressedKeysArray(computerKey);
        addPianoKeyColor(computerKey);
    }
}

/**
 * Check if the user can play the note at the desired computer key.
 */
function canPlayNote(computerKey) {
    return pianoKeys.has(computerKey) && !currentlyPressedKeys.includes(computerKey);
}

/**
 * Plays the note at a pitch.
 * Uses the Web Audio API to set the volume of the audio and play the sound to the user's output speakers.
 */
function playNoteAtPitch(pitch, buffers) {
    const gainNode = getNewGainNode();
    const bufferSource = getNewBufferSource(pitch, buffers);
    connectToOutputSpeakers(gainNode, bufferSource);
    bufferSource.start(audioContext.currentTime);
    addGainNodeToList(gainNode, pitch);
}

/**
 * Gets a new gain node.
 * Sets the initial volume of the note and sets it up to naturally lower in
 * volume when the user holds the note.
 * @returns { AudioNode }
 */
function getNewGainNode() {
    const newGainNode = audioContext.createGain();
    const NOTE_VOLUME = 1;
    const NOTE_DURATION = 10;
    newGainNode.gain.setValueAtTime(NOTE_VOLUME, audioContext.currentTime);
    newGainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + NOTE_DURATION);
    return newGainNode;
}

/**
 * Creates a new buffer source. We use it to play the audio defined by the audio buffer.
 * @returns { AudioBufferSourceNode }
 */
function getNewBufferSource(pitch, buffers) {
    const newBufferSource = audioContext.createBufferSource();
    const currentNoteAudioBuffer = buffers[pitch];
    newBufferSource.buffer = currentNoteAudioBuffer;
    return newBufferSource;
}

/**
 * Hook the buffer source and gain node up to the user's output speakers so they can hear the audio.
 */
function connectToOutputSpeakers(gainNode, bufferSource) {
    bufferSource.connect(gainNode);
    gainNode.connect(destination);
    gainNode.connect(audioContext.destination);
}

/**
 * Keep track of the gain nodes we've created/used.
 * @param { Audio Node }
 * @param { string }
 */
function addGainNodeToList(gainNode, pitch) {
    gainNodesUsed[pitch] = gainNode;
}

/**
 * Keep track of the notes the user is playing at the moment.
 * Prevents the note from starting over when the user holds a key down, which is default behavior for the keydown event.
 * @param { string }
 */
function addComputerKeyToPressedKeysArray(computerKey) {
    currentlyPressedKeys.push(computerKey);
}

/**
 * Sets the background color of the piano key being played.
 * Needed for the keydown event.
 * @param { string }
 */
function addPianoKeyColor(computerKey) {
    const pianoKeyElement = document.querySelector(`button[value="${computerKey}"]`);
    pianoKeyElement.classList.add('pressed-piano-key');
}

/**
 * Stops playing a note.
 * @param { Event }
 */
export function endNote(event) {
    const computerKey = getComputerKeyByEvent(event);

    if (canEndNote(computerKey)) {
        const pitch = getPitchByComputerKey(computerKey);
        removePianoKeyColor(computerKey);
        removeComputerKeyFromPressedKeysArray(computerKey);
        endNoteAtPitch(pitch);
    }
}

/**
 * Checks if the note can stop being played.
 * Prevents errors when the user presses a key on their computer keyboard that is not used for the piano keyboard.
 * @param { string }
 * @returns { boolean }
 */
function canEndNote(computerKey) {
    return pianoKeys.has(computerKey) && currentlyPressedKeys.includes(computerKey);
}

/**
 * Resets the background color of the piano key being played.
 * Needed for the keyup event.
 * @param { string }
 */
function removePianoKeyColor(computerKey) {
    const pianoKeyElement = document.querySelector(`button[value="${computerKey}"]`);
    pianoKeyElement.classList.remove('pressed-piano-key');
}

/**
 * Keep track of the notes the user is playing at the moment.
 * @param { string }
 */
function removeComputerKeyFromPressedKeysArray(computerKey) {
    const index = currentlyPressedKeys.indexOf(computerKey);
    currentlyPressedKeys.splice(index, 1);
}

/**
 * Lowers the volume of the gain node down to imperceptible volume after a second.
 * Makes the note ending sound natural.
 * @param { string }
 */
function endNoteAtPitch(pitch) {
    const NOTE_DURATION = 0.5;
    const currentNoteGainNode = gainNodesUsed[pitch];
    currentNoteGainNode.gain.setValueAtTime(0.01, audioContext.currentTime + NOTE_DURATION);
}

/**
 * Get the computer key from any kind of DOM event.
 * @param { Event }
 * @returns { string }
 */
function getComputerKeyByEvent(event) {
    const computerKey = event.key || event.target.value;
    return String(computerKey).toLowerCase();
}

/**
 * Get the pitch of the note by the computer key.
 * @param { string }
 * @returns { string }
 */
function getPitchByComputerKey(computerKey) {
    const pianoKey = pianoKeys.get(computerKey);
    const noteName = pianoKey.noteName;
    const octave = pianoKey.octave;
    return String(noteName) + String(octave);
}
