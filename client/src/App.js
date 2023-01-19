/*
    App.js: Render the keyboard and define state variables and setters that will be passed down to
    the appropriate components.
*/

import { useState } from "react";
import Piano from "./components/Piano";
import FeatureControls from './components/FeatureControls';
import Screen from './components/Screen';
import FullscreenButton from "./components/FullscreenButton";
import PlayButton from "./components/PlayButton";
import RecordButton from "./components/RecordButton";
import TextOverlayButton from "./components/TextOverlayButton";
import TextOverlay from "./components/TextOverlay";

const audioContext = new AudioContext();
const dest = audioContext.createMediaStreamDestination();
const mediaRecorder = new MediaRecorder(dest.stream);

function App() {
    const [buffers, setBuffers] = useState([]);
    const [hasSustain, setHasSustain] = useState(false);
    const [hasSoften, setHasSoften] = useState(false);
    const [currentTextOverlay, setCurrentTextOverlay] = useState(null);

    return (
        <>
            <TextOverlay currentTextOverlay={currentTextOverlay} />

            <section className="piano-container">
                <div className="controls">
                    <div className="flex flex-column">
                        <div className="flex round-btn-container">
                            <FullscreenButton />
                            <RecordButton mediaRecorder={mediaRecorder} />
                            <PlayButton mediaRecorder={mediaRecorder} />
                        </div>
                        <div className="flex rect-btn-container">
                            <TextOverlayButton 
                                title="About"
                                shouldShowTextOverlay
                                setCurrentTextOverlay={setCurrentTextOverlay} />
                            <TextOverlayButton 
                                title="Help"
                                shouldShowTextOverlay
                                setCurrentTextOverlay={setCurrentTextOverlay} />
                        </div>
                    </div>

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
                    buffers={buffers}
                    dest={dest} />
            </section>
        </>
    )
}

export default App;