import { useEffect } from "react";
import PianoKey from "./PianoKey";
import keysMap from "../contents/keysMap";

let currentlyPressedKeys = [];
let gainNodesList = [];

const getPitch = (keyboardCharacter) => {
    let pianoKey = keysMap.get(keyboardCharacter);
    let noteName = pianoKey.noteName;
    let octave = pianoKey.octave;
    return noteName + octave;
}

const addPianoKeyColor = (keyboardCharacter) => {
    let pianoKeyElement = document.querySelector(`button[value="${keyboardCharacter}"]`);
    let isBlackKey = pianoKeyElement.classList.contains("black-key");

    if (isBlackKey) {
        pianoKeyElement.classList.add('pressed-key-black');
    } else {
        pianoKeyElement.classList.add('pressed-key-white');
    }
}

const removePianoKeyColor = (keyboardCharacter) => {
    let pianoKeyElement = document.querySelector(`button[value="${keyboardCharacter}"]`);
    let isBlackKey = pianoKeyElement.classList.contains("black-key");
    
    if (isBlackKey) {
        pianoKeyElement.classList.remove('pressed-key-black');
    } else {
        pianoKeyElement.classList.remove('pressed-key-white');
    }
}

function Piano(props) {
    const hasSoften = props.hasSoften;
    const audioContext = props.audioContext;
    const hasSustain = props.hasSustain;
    const buffers = props.buffers;
    const dest = props.dest;
    const NOTE_DURATION_IN_SECONDS = 10;

    const getNoteVolume = () => {
        if (hasSoften) {
            return 0.35;
        }
        return 1;
    }

    const endNote = (pitch) => {
        gainNodesList[pitch].gain.setValueAtTime(0.01, audioContext.currentTime);
    }

    const createNewGainNode = () => {
        let newGainNode = audioContext.createGain();
        let noteVolume = getNoteVolume();
        newGainNode.gain.setValueAtTime(noteVolume, audioContext.currentTime);
        newGainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + NOTE_DURATION_IN_SECONDS);
        return newGainNode;
    }

    const createNewBufferSource = (pitch) => {
        let newBufferSource = audioContext.createBufferSource();
        newBufferSource.buffer = buffers[pitch];
        return newBufferSource;
    }

    const connectToOutputSpeakers = (gainNode, bufferSource) => {
        bufferSource.connect(gainNode);
        gainNode.connect(dest);
        gainNode.connect(audioContext.destination);
    }

    const addGainNodeToList = (gainNode, pitch) => {
        gainNodesList[pitch] = gainNode;
    }

    const playNote = (pitch) => {
        let gainNode = createNewGainNode();
        let bufferSource = createNewBufferSource(pitch);
        connectToOutputSpeakers(gainNode, bufferSource);
        bufferSource.start(audioContext.currentTime);
        addGainNodeToList(gainNode, pitch);
    }

    const canPlayPianoNote = (keyboardCharacter) => {
        return keysMap.has(keyboardCharacter) 
               && !currentlyPressedKeys.includes(keyboardCharacter);
    }
    
    const canStopPianoNote = (keyboardCharacter) => {
        return keysMap.has(keyboardCharacter) 
               && currentlyPressedKeys.includes(keyboardCharacter);
    }

    const getKeyboardCharacterByEvent = (e) => {
        let keyboardCharacter = e.key || e.target.value;
        keyboardCharacter = keyboardCharacter.toLowerCase();
        return keyboardCharacter;
    }

    const playNoteAtPianoKey = (e) => {
        e.preventDefault();
        let keyboardCharacter = getKeyboardCharacterByEvent(e);

        if (canPlayPianoNote(keyboardCharacter)) {
            let pitch = getPitch(keyboardCharacter);
            playNote(pitch);
            currentlyPressedKeys.push(keyboardCharacter);
            addPianoKeyColor(keyboardCharacter);  
        } 
    }

    const endNoteAtPianoKey = (e) => {
        e.preventDefault();
        let keyboardCharacter = getKeyboardCharacterByEvent(e);

        if (canStopPianoNote(keyboardCharacter)) {
            let pitch = getPitch(keyboardCharacter);
            currentlyPressedKeys = currentlyPressedKeys.filter((char) => char !== keyboardCharacter);
            removePianoKeyColor(keyboardCharacter);
            if (!hasSustain) {
                endNote(pitch);
            }
        } 
    }

    useEffect(() => {
        document.addEventListener('keydown', playNoteAtPianoKey);
        document.addEventListener('keyup', endNoteAtPianoKey);

        return () => {
            document.removeEventListener('keydown', playNoteAtPianoKey);
            document.removeEventListener('keyup', endNoteAtPianoKey);
        }
    })

    return (
        <div id="piano" className="flex" 
            onMouseDown={playNoteAtPianoKey} 
            onMouseUp={endNoteAtPianoKey}>

            <PianoKey keyColor="white" keyboardKey="q" />
            <PianoKey keyColor="black" keyboardKey="2" />
            <PianoKey keyColor="white" keyboardKey="w" />
            <PianoKey keyColor="black" keyboardKey="3" />
            <PianoKey keyColor="white" keyboardKey="e" />
            <PianoKey keyColor="white" keyboardKey="r" />
            <PianoKey keyColor="black" keyboardKey="5" />
            <PianoKey keyColor="white" keyboardKey="t" />
            <PianoKey keyColor="black" keyboardKey="6" />
            <PianoKey keyColor="white" keyboardKey="y" />
            <PianoKey keyColor="black" keyboardKey="7" />
            <PianoKey keyColor="white" keyboardKey="u" />
            <PianoKey keyColor="white" keyboardKey="i" />
            <PianoKey keyColor="black" keyboardKey="9" />
            <PianoKey keyColor="white" keyboardKey="o" />
            <PianoKey keyColor="black" keyboardKey="0" />
            <PianoKey keyColor="white" keyboardKey="p" />
            <PianoKey keyColor="white" keyboardKey="[" />
            <PianoKey keyColor="black" keyboardKey="=" />
            <PianoKey keyColor="white" keyboardKey="]" />
            <PianoKey keyColor="black" keyboardKey="a" />
            <PianoKey keyColor="white" keyboardKey="z" />
            <PianoKey keyColor="black" keyboardKey="s" />
            <PianoKey keyColor="white" keyboardKey="x" />
            <PianoKey keyColor="white" keyboardKey="c" />
            <PianoKey keyColor="black" keyboardKey="f" />
            <PianoKey keyColor="white" keyboardKey="v" />
            <PianoKey keyColor="black" keyboardKey="g" />
            <PianoKey keyColor="white" keyboardKey="b" />
            <PianoKey keyColor="white" keyboardKey="n" />
            <PianoKey keyColor="black" keyboardKey="j" />
            <PianoKey keyColor="white" keyboardKey="m" />
            <PianoKey keyColor="black" keyboardKey="k" />
            <PianoKey keyColor="white" keyboardKey="," />
            <PianoKey keyColor="black" keyboardKey="l" />
            <PianoKey keyColor="white" keyboardKey="." />
            <PianoKey keyColor="white" keyboardKey="/" />
        </div>
    )
}

export default Piano;