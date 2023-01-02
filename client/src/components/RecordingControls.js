/*
    FILE: RecordingControls.js
    PURPOSE: Render the section of recording buttons displayed on the virtual keyboard,
            toggle fullscreen mode on and off, and define behavior for recording keyboard audio,
            including naming an mp3 file and storing the data in a MySQL database.
*/

import Button from "./Button";
import { useCallback, useEffect, useState } from "react";

function RecordingControls(props) {
    const [isRecording, setIsRecording] = useState(false);
    const [newRecordingTitle, setNewRecordingTitle] = useState('');

    const mediaRecorder = props.mediaRecorder;
    const setIsWindowOpen = props.setIsWindowOpen;
    const isWindowOpen = props.isWindowOpen;

    // Toggle fullscreen mode on and off.
    const handleFullscreen = useCallback(() => {
        if (document.fullscreenElement === null) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })

    // Save a user-generated recording by making a FETCH request to the server at port 5000.
    const saveRecording = useCallback((e) => {
        let data = [e.data];
        let blob = new Blob(data, { type: 'audio/mp3' });
        let url = URL.createObjectURL(blob);

        fetch("http://localhost:5000/recording", {
            method: 'post',
            headers: new Headers({ 
                "Access-Control-Allow-Origin": "http://localhost:5000",
                "Accept": "application/json", 
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ 
                title: newRecordingTitle,
                url: url,
            }),
            mode: 'cors'
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    })

    const handleRecording = useCallback((e) => {
        setIsRecording(!isRecording);
        if (isRecording) {
            mediaRecorder.start();
        } else {
            mediaRecorder.stop();
        }
        document.getElementById('new-recording-form').classList.remove('hide');
        setIsWindowOpen(true);
    })

    const handleRecordingTitle = useCallback((e) => {
        e.preventDefault();
        setNewRecordingTitle(e.target.newRecordingTitle.value);
        document.getElementById('new-recording-form').classList.add('hide');
        // mediaRecorder.ondataavailable = saveRecording;
        setIsWindowOpen(false);
    })


    // FIX THIS (?)
    useEffect(() => {
        const fullscreenBtn = document.querySelector('.fullscreen-btn');
        fullscreenBtn.addEventListener('click', handleFullscreen)
        return () => {
            fullscreenBtn.removeEventListener('click', handleFullscreen)
        }
    }, [document.fullscreenElement])


    return (
        <>
            <div className="flex flex-column">
                <div className="flex round-btn-container">
                    <Button type="checkbox" className="round-btn">Stop</Button>
                    <Button type="checkbox" className="round-btn" onChange={handleRecording}>Record</Button>
                    <Button type="checkbox" className="round-btn">Play</Button>
                </div>
                <div className="flex rect-btn-container">
                    <Button type="button" className="rect-btn">About</Button>
                    <Button type="button" className="rect-btn fullscreen-btn">Fullscreen</Button>
                </div>
            </div>
            <form className="flex hide" id="new-recording-form" onSubmit={handleRecordingTitle}>
                <div className="flex flex-column">
                    <label htmlFor="newRecordingTitle" id="new-recording-label">Recording Title</label>
                    <input type="text" name="newRecordingTitle" id="new-recording-input" required />
                </div>
                <button id="new-recording-btn"><span className="material-symbols-outlined">add</span></button>
            </form>
        </>
    )
}

export default RecordingControls;