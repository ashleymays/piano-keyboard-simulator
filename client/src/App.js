import { useCallback, useState, useEffect } from "react";
import Piano from "./components/Piano";
import Controls from "./components/Controls";
import keysMap from "./keysMap";

function App() {
    const [currentlyPressedKeys, setPressedKeys] = useState([]);

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
            <Controls />
            <Piano />
        </section>
    )
}

export default App;