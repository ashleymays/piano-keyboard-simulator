/*
    FILE: App.js
    PURPOSE: Render the keyboard and define state variables and setters that will be passed down to
            the appropriate components.
*/

import { useState } from "react";
import Piano from "./components/Piano";
import RecordingControls from './components/RecordingControls';
import FeatureControls from './components/FeatureControls';
import Screen from './components/Screen';

const audioContext = new AudioContext();
const dest = audioContext.createMediaStreamDestination();
const mediaRecorder = new MediaRecorder(dest.stream);

function App() {
    const [buffers, setBuffers] = useState([]);
    const [hasSustain, setHasSustain] = useState(false);
    const [hasSoften, setHasSoften] = useState(false);
    const [recordingFormIsOpen,  setRecordingFormIsOpen] = useState(false);

    return (
        <section className="piano-container">
            <div className="controls">
                <RecordingControls 
                    mediaRecorder={mediaRecorder}
                    recordingFormIsOpen={recordingFormIsOpen}
                    setRecordingFormIsOpen={setRecordingFormIsOpen} />

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
                dest={dest}
                recordingFormIsOpen={recordingFormIsOpen}/>
        </section>
    )
}

export default App;