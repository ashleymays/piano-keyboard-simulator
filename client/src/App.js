import { useState, useEffect, useCallback } from "react";
import Piano from "./components/Piano";
import Controls from "./components/Controls";
import keysMap from "./keysMap";

const context = new AudioContext();
const dest = context.createMediaStreamDestination();
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



function App() {
    const [buffers, setBuffers] = useState([]);
    const [hasSustain, setHasSustain] = useState(false);
    const [hasSoften, setHasSoften] = useState(false);

    const getVolume = useCallback(() => {
        if (hasSoften) {
            return 0.35;
        }
        return 1.5;
    })

    const stopNote = useCallback((pitch) => {
        gainNodes[pitch].gain.setValueAtTime(0.01, context.currentTime);
    })

    // Play note
    const playNote = useCallback((pitch) => {
        let gainNode = context.createGain();
        let bufferSource = context.createBufferSource();
        let volume = getVolume();
        bufferSource.buffer = buffers[pitch];
        gainNode.gain.setValueAtTime(volume, context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 10);
        bufferSource.connect(gainNode);
        gainNode.connect(dest);
        gainNode.connect(context.destination);
        bufferSource.start(context.currentTime);
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
        <section className="piano-container">
            <Controls 
                context={context} 
                buffers={buffers} 
                setBuffers={setBuffers}
                hasSustain={hasSustain}
                setHasSustain={setHasSustain}
                hasSoften={hasSoften}
                setHasSoften={setHasSoften} />

            <Piano 
                handleKey={handleKey} />
        </section>
    )
}

export default App;