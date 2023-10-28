import pianoKeys from '../../data/pianoKeys';

const audioContext = new AudioContext();
const destination = audioContext.createMediaStreamDestination();
const currentlyPressedKeys = [];
const gainNodesUsed = {};

/**
 * Plays the note at a computer key/piano key if it is allowed to be played.
 */
export function playNote(event, buffers) {
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
    const gainNode = getNewGainNode(audioContext);
    const bufferSource = getNewBufferSource(pitch, buffers);
    connectToOutputSpeakers(gainNode, bufferSource);
    bufferSource.start(audioContext.currentTime);
    addGainNodeToList(gainNode, pitch);
}

function getGainNode(pitch) {
    if (gainNodesUsed[pitch]) {
    }
}

/**
 * Creates a new gain node. We use it to set the volume/gain of the audio.
 * @returns { AudioNode }
 */
function getNewGainNode() {
    const newGainNode = audioContext.createGain();
    const NOTE_VOLUME = 1;
    const NOTE_DURATION_IN_SECONDS = 10;
    newGainNode.gain.setValueAtTime(NOTE_VOLUME, audioContext.currentTime);
    newGainNode.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + NOTE_DURATION_IN_SECONDS
    );
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
 * Keep track of the gain nodes we've used
 */
function addGainNodeToList(gainNode, pitch) {
    gainNodesUsed[pitch] = gainNode;
}

function addComputerKeyToPressedKeysArray(computerKey) {
    currentlyPressedKeys.push(computerKey);
}

function addPianoKeyColor(computerKey) {
    const pianoKeyElement = document.querySelector(`button[value="${computerKey}"]`);
    pianoKeyElement.classList.add('pressed-piano-key');
}

export function endNote(event) {
    const computerKey = getComputerKeyByEvent(event);

    if (canEndNote(computerKey)) {
        const pitch = getPitchByComputerKey(computerKey);
        removePianoKeyColor(computerKey);
        removeComputerKeyFromPressedKeysArray(computerKey);
        endNoteAtPitch(pitch);
    }
}

function canEndNote(computerKey) {
    return pianoKeys.has(computerKey) && currentlyPressedKeys.includes(computerKey);
}

function removePianoKeyColor(computerKey) {
    const pianoKeyElement = document.querySelector(`button[value="${computerKey}"]`);
    pianoKeyElement.classList.remove('pressed-piano-key');
}

function removeComputerKeyFromPressedKeysArray(computerKey) {
    const index = currentlyPressedKeys.indexOf(computerKey);
    currentlyPressedKeys.splice(index, 1);
}

function endNoteAtPitch(pitch) {
    gainNodesUsed[pitch].gain.setValueAtTime(0.01, audioContext.currentTime);
}

function getComputerKeyByEvent(event) {
    const computerKey = event.key || event.target.value;
    return String(computerKey).toLowerCase();
}

function getPitchByComputerKey(computerKey) {
    const pianoKey = pianoKeys.get(computerKey);
    const noteName = pianoKey.noteName;
    const octave = pianoKey.octave;
    return String(noteName) + String(octave);
}
