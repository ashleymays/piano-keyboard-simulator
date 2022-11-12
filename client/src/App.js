import { useState, useEffect, useCallback } from "react";
import Piano from "./components/Piano";
import Controls from "./components/Controls";
import keysMap from "./keysMap";

const context = new AudioContext();
const dest = context.createMediaStreamDestination();


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
    const [currentlyPressedKeys, setPressedKeys] = useState([]);
    const [buffers, setBuffers] = useState([]);
    const [hasSustain, setHasSustain] = useState(false);
    const [hasSoften, setHasSoften] = useState(false);

    // Play note
    const playNote = useCallback((pitch) => {
        let gainNode = context.createGain();
        let bufferSource = context.createBufferSource();
        bufferSource.buffer = buffers[pitch];
        gainNode.gain.setValueAtTime(1.5, context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 13);
        bufferSource.connect(gainNode);
        gainNode.connect(dest);
        gainNode.connect(context.destination);
        bufferSource.start(context.currentTime);
    })

    // Add pressed key to the array
    const handleKey = useCallback((e) => {
        let key = e.key || e.target.value;
        let eventName = e.type;
        let playEvent = [ "keydown", "mousedown" ];
        let stopEvent = [ "keyup", "mouseup" ];

        key = key.toLowerCase();

        if (playEvent.includes(eventName) && 
            keysMap.has(key) && 
            !currentlyPressedKeys.includes(key)) {

            let pitch = getPitch(key);
            playNote(pitch);
            setPressedKeys(currentlyPressedKeys.concat(key));
            addKeyColor(key);            
        }
        else if (stopEvent.includes(eventName) && keysMap.has(key)) {
            setPressedKeys(currentlyPressedKeys.filter((k) => k !== key));
            removeKeyColor(key);
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