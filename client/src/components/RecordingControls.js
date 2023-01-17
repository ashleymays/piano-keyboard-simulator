/*
    FILE: RecordingControls.js
    PURPOSE: Render the section of recording buttons displayed on the virtual keyboard 
            and define behavior for recording keyboard audio, including naming an mp3 
            file and storing the data in a MySQL database.
*/

import Button from "./Button";
import FullscreenButton from "./FullscreenButton";
import PageOverlay from "./PageOverlay";
import pageOverlayContents from "../contents/pageOverlay";
import { useEffect, useState } from "react";


function RecordingControls(props) {
    const [isRecording, setIsRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [recordingURL, setRecordingURL] = useState('');
    const [currentOverlay, setCurrentOverlay] = useState('');

    const mediaRecorder = props.mediaRecorder;

    // Get the recording's URL and open the form to enter a title for the recording
    mediaRecorder.ondataavailable = (e) => {
        let data = [e.data];
        let blob = new Blob(data, { type: 'audio/mp3' });
        let url = URL.createObjectURL(blob);
        setRecordingURL(url);
    }

    // Open page overlay
    const openOverlay = (title) => {
        document.querySelector('.page-overlay').classList.add('show');
        setCurrentOverlay(title)
    }

    // Start and stop the media recording from recording audio in the tab.
    useEffect(() => {
        // Start the recorder if isRecording has been set to true.
        if (isRecording) {
            mediaRecorder.start();          
        } else {
            mediaRecorder.stop();
        }
    }, [isRecording])

    // Play the most recent recording
    useEffect(() => {
        const audioElement = document.getElementById('recording-audio-element');

        // Play the recording if isPlaying has been set to true.
        if (isPlaying) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }, [isPlaying])

    return (
        <>
            {/* Element that holds the recording last recorded */}
            <audio hidden={true} id="recording-audio-element" src={recordingURL} type="audio/mp3"></audio>

            <PageOverlay includeExitButton={true}>
                {pageOverlayContents[currentOverlay]}
            </PageOverlay>

            {/* Buttons */}
            <div className="flex flex-column">
                <div className="flex round-btn-container">
                    <FullscreenButton />
                    <Button type="checkbox" className="round-btn" onChange={() => setIsRecording(!isRecording)}>Record</Button>
                    <Button type="checkbox" className="round-btn" onChange={() => setIsPlaying(!isPlaying)}>Play</Button>
                </div>
                <div className="flex rect-btn-container">
                    <Button type="button" className="rect-btn" onClick={() => openOverlay('about')}>About</Button>
                    <Button type="button" className="rect-btn" onClick={() => openOverlay('help')}>Help</Button>
                </div>
            </div>
        </>
    )
}

export default RecordingControls;