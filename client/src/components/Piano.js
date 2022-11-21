import { useEffect, useCallback } from "react";
import PianoKey from "./PianoKey";
import keysMap from "../keysMap";

let currentlyPressedKeys = [];
let gainNodes = [];

// Get pitch by key name
const getPitch = (key) => {
    let noteName = keysMap.get(key).noteName;
    let octave = keysMap.get(key).octave;
    return noteName + octave;
}


const addKeyColor = (key) => {
    let pianoKey = document.querySelector(`button[value="${key}"]`);
    let isBlackKey = pianoKey.classList.contains("black-key");

    if (isBlackKey) {
        pianoKey.classList.add('pressed-key-black');
    } else {
        pianoKey.classList.add('pressed-key-white');
    }
}

const removeKeyColor = (key) => {
    let pianoKey = document.querySelector(`button[value="${key}"]`);
    let isBlackKey = pianoKey.classList.contains("black-key");
    
    if (isBlackKey) {
        pianoKey.classList.remove('pressed-key-black');
    } else {
        pianoKey.classList.remove('pressed-key-white');
    }
}

function Piano(props) {
    const hasSoften = props.hasSoften;
    const audioContext = props.audioContext;
    const hasSustain = props.hasSustain;
    const buffers = props.buffers;
    const dest = audioContext.createMediaStreamDestination();

    const getVolume = useCallback(() => {
        if (hasSoften) {
            return 0.35;
        }
        return 1.5;
    })

    const stopNote = useCallback((pitch) => {
        gainNodes[pitch].gain.setValueAtTime(0.01, audioContext.currentTime);
    })

    // Play note
    const playNote = useCallback((pitch) => {
        let gainNode = audioContext.createGain();
        let bufferSource = audioContext.createBufferSource();
        let volume = getVolume();
        bufferSource.buffer = buffers[pitch];
        gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 10);
        bufferSource.connect(gainNode);
        gainNode.connect(dest);
        gainNode.connect(audioContext.destination);
        bufferSource.start(audioContext.currentTime);
        gainNodes[pitch] = gainNode;
    })

    const handleKey = useCallback((e) => {
        e.preventDefault();
        let key = e.key || e.target.value; // e.key for keyboard input and e.target.value for mouse and touch input
        let eventName = e.type;
        let playEvents = [ "keydown", "mousedown" ];
        let stopEvents = [ "keyup", "mouseup" ];

        key = key.toLowerCase();

        if (playEvents.includes(eventName) && keysMap.has(key) && !currentlyPressedKeys.includes(key)) {
            let pitch = getPitch(key);
            playNote(pitch);
            currentlyPressedKeys.push(key);
            addKeyColor(key);     
        } 
        else if (stopEvents.includes(eventName) && keysMap.has(key)) {
            let pitch = getPitch(key);
            currentlyPressedKeys = currentlyPressedKeys.filter((k) => k !== key);
            removeKeyColor(key);
            if (!hasSustain) {
                stopNote(pitch);
            }
        }
    })

    useEffect(() => {
        document.addEventListener('keydown', handleKey);
        document.addEventListener('keyup', handleKey);

        return () => {
            document.removeEventListener('keydown', handleKey);
            document.removeEventListener('keyup', handleKey);
        }
    })

    return (
        <div id="piano" className="flex" 
            onMouseDown={handleKey} 
            onMouseUp={handleKey}>

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