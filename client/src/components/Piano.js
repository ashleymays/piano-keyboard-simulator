/*
    FILE: Piano.js
    PURPOSE: Render the piano keys and define the behavior of the website when a key is pressed. Also
            define the functionality of the 'sustain' and 'soften' buttons.
*/

import { useEffect, useCallback } from "react";
import PianoKey from "./PianoKey";
import keysMap from "../contents/keysMap";

// Used to avoid a note being played on release.
let currentlyPressedKeys = [];

// Used to store the gain nodes of each pitch.
let gainNodes = [];

// Get pitch by key name
const getPitch = (key) => {
    let noteName = keysMap.get(key).noteName;
    let octave = keysMap.get(key).octave;
    return noteName + octave;
}

// Change the background color of the piano key while it's being pressed down.
// This is done by adding a CSS class that is defined in "index.css" in the src folder.
const addKeyColor = (key) => {
    let pianoKey = document.querySelector(`button[value="${key}"]`);
    let isBlackKey = pianoKey.classList.contains("black-key");

    if (isBlackKey) {
        pianoKey.classList.add('pressed-key-black');
    } else {
        pianoKey.classList.add('pressed-key-white');
    }
}

// Change the background color of the piano key when it is released.
// This is done by removing a CSS class that is defined in "index.css" in the src folder.
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
    const dest = props.dest;
    const recordingFormIsOpen = props.recordingFormIsOpen;

    // Get the volume that the key should be played at. If softening is turned on, then play the note at 35%.
    // Else play it at 150%.
    const getVolume = () => {
        if (hasSoften) {
            return 0.35;
        }
        return 1;
    }

    // Cancel the audio that is played by a particular piano key. This is done by reducing the volume
    // to 1% instantaneously.
    const stopNote = (pitch) => {
        gainNodes[pitch].gain.setValueAtTime(0.01, audioContext.currentTime);
    }

    // Play a note. This is called by the "handlekey" function.
    const playNote = (pitch) => {
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
    }

    // Determine when a note should be played or ended depending on user interaction.
    const handleKey = (e) => {
        e.preventDefault();
        
        // Uses e.key for keyboard input and e.target.value for mouse 
        // and touch input, where e.key is undefined.
        let key = e.key || e.target.value;
        let eventName = e.type;


        // The 'playEvents' array gives a list of JavaScript events that are associated with playing a note.
        // The 'stopEvents' array gives a list of JavaScript events that are associated with ending a note.
        // These are used to avoid writing the same code twice for different events.
        let playEvents = [ "keydown", "mousedown" ];
        let stopEvents = [ "keyup", "mouseup" ];

        key = key.toLowerCase();

        // Play a certain note if the event is associated with playing notes,
        // the pressed key is one associated with the virtual keyboard, and
        // the user isn't typing a recording's title
        if (playEvents.includes(eventName) 
            && keysMap.has(key) 
            && !currentlyPressedKeys.includes(key)
            && !recordingFormIsOpen) 
        {
            let pitch = getPitch(key);
            playNote(pitch);
            currentlyPressedKeys.push(key);
            addKeyColor(key);  
        } 

        // End a certain note if the event is associated with ending notes,
        // the pressed key is one associated with the virtual keyboard, and
        // the user isn't typing a recording's title
        else if (stopEvents.includes(eventName) 
                && keysMap.has(key)
                && !recordingFormIsOpen) 
        {
            let pitch = getPitch(key);
            currentlyPressedKeys = currentlyPressedKeys.filter((k) => k !== key);
            removeKeyColor(key);
            if (!hasSustain) {
                stopNote(pitch);
            }
        }
    }

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