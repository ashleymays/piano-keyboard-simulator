import { useState } from "react";
import Piano from "./components/Piano";
import RecordingControls from './components/RecordingControls';
import FeatureControls from './components/FeatureControls';
import Screen from './components/Screen';

const audioContext = new AudioContext();

function App() {
    const [buffers, setBuffers] = useState([]);
    const [hasSustain, setHasSustain] = useState(false);
    const [hasSoften, setHasSoften] = useState(false);

    return (
        <section className="piano-container">
            <div className="controls">
                <RecordingControls 
                    audioContext={audioContext} />

                <Screen 
                    audioContext={audioContext} 
                    setBuffers={setBuffers} />

                <FeatureControls 
                    audioContext={audioContext}
                    hasSustain={hasSustain}
                    setHasSustain={setHasSustain}
                    hasSoften={hasSoften}
                    setHasSoften={setHasSoften} />
            </div>

            <Piano 
                audioContext={audioContext}
                hasSustain={hasSustain}
                hasSoften={hasSoften}
                buffers={buffers} />
        </section>
    )
}

export default App;