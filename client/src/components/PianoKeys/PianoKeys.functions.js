import pianoKeys from '../../data/pianoKeys';

const audioContext = new AudioContext();
const destination = audioContext.createMediaStreamDestination();
const currentlyPressedKeys = [];
const gainNodesList = [];

export function playNote(event, buffers, audioContext) {
    const computerKey = getComputerKeyByEvent(event);

    if (canPlayNote(computerKey)) {
        const pitch = getPitchByComputerKey(computerKey);
        playNoteAtPitch(pitch, buffers, audioContext);
        addComputerKeyToPressedKeysArray(computerKey);
        addPianoKeyColor(computerKey);
    }
}

function canPlayNote(computerKey) {
    return pianoKeys.has(computerKey) && !currentlyPressedKeys.includes(computerKey);
}

function playNoteAtPitch(pitch, buffers, audioContext) {
    const gainNode = getNewGainNode();
    const bufferSource = getNewBufferSource(pitch, buffers);
    connectToOutputSpeakers(gainNode, bufferSource);
    bufferSource.start(audioContext.currentTime);
    addGainNodeToList(gainNode, pitch);
}

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

function getNewBufferSource(pitch, buffers) {
    const newBufferSource = audioContext.createBufferSource();
    newBufferSource.buffer = buffers[pitch];
    return newBufferSource;
}

function connectToOutputSpeakers(gainNode, bufferSource) {
    bufferSource.connect(gainNode);
    gainNode.connect(destination);
    gainNode.connect(audioContext.destination);
}

function addGainNodeToList(gainNode, pitch) {
    gainNodesList[pitch] = gainNode;
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
    gainNodesList[pitch].gain.setValueAtTime(0.01, audioContext.currentTime);
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
