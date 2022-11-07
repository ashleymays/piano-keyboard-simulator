import { useCallback, useState } from "react";
import Piano from "./components/Piano";
import Controls from "./components/Controls";
import keysMap from "./keysMap";

function App() {
    const [currentlyPressedKeys, setPressedKeys] = useState([]);
    const [context, setContext] = useState(new AudioContext());
    const [buffers, setBuffers] = useState([]);
    const [dest, setDestination] = useState(context.createMediaStreamDestination());

    // Play note
    const playNote = (pitch) => {
        let gainNode = context.createGain();
        let bufferSource = context.createBufferSource();
        bufferSource.buffer = buffers[pitch];
        console.log(buffers[pitch])
    }

    // Get pitch by key name
    const getPitch = (key) => {
        let noteName = keysMap.get(key).noteName;
        let octave = keysMap.get(key).octave;
        return noteName + octave;
    }

    // Add pressed key to the array
    const handleKey = useCallback((e) => {
        let key = e.key.toLowerCase();
        let eventName = e.type;

        if (eventName === "keydown" && keysMap.has(key) && !currentlyPressedKeys.includes(key)) {
            let pitch = getPitch(key);
            playNote(pitch);
            setPressedKeys(currentlyPressedKeys.concat(key))
        }
        else if (eventName === "keyup" && keysMap.has(key)) {
            setPressedKeys(currentlyPressedKeys.filter((k) => k !== key))
        }
    })

    return (
        <section className="piano-container" 
                 onKeyDown={handleKey}
                 onKeyUp={handleKey}>
            <Controls context={context} buffers={buffers} setBuffers={setBuffers} />
            <Piano />
        </section>
    )
}

export default App;