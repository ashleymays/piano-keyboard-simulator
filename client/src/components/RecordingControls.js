/*
    FILE: RecordingControls.js
    PURPOSE: Render the section of recording buttons displayed on the virtual keyboard 
            and define behavior for recording keyboard audio, including naming an mp3 
            file and storing the data in a MySQL database.
*/

import Button from "./Button";
import FullscreenButton from "./FullscreenButton";
import { useEffect, useState } from "react";

// Hide form to type recording's title
const hideForm = () => {
    document.getElementById('new-recording-form').classList.add('hide');
}

// Show form to type recording's title
const showForm = () => {
    document.getElementById('new-recording-form').classList.remove('hide');
}

function blobToBase64(blob) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
        reader.onloadend = () => {
            resolve(reader.result);
        };
    });
}


// TODO: Check that the recording title is valid (no periods)
const isValidTitle = (title) => {
    return title !== '';
} 


function RecordingControls(props) {
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTitle, setRecordingTitle] = useState('');
    const [fileData, setFileData] = useState(null);
    const mediaRecorder = props.mediaRecorder;
    const setRecordingFormIsOpen = props.setRecordingFormIsOpen;
    const recordingFormIsOpen = props.recordingFormIsOpen;

    // Get the recording's title and save the recording
    const handleRecordingTitle = (e) => {
        e.preventDefault();
        setRecordingTitle(e.target.newRecordingTitle.value);
        e.target.newRecordingTitle.value = ''; // clear form input
        hideForm();
    }


    // TODO: Get the recording's URL and open the form to enter a title for the recording
    mediaRecorder.ondataavailable = (e) => {
        let data = [e.data];
        let blob = new Blob(data, { type: 'audio/mp3' });
        blobToBase64(blob)
            .then(base64Data => {
                const file = "data:audio/webm;base64," + base64Data;
                setFileData(file);
            })
        showForm();
        setRecordingFormIsOpen(!recordingFormIsOpen);
    }


    // Start and stop the media recording from recording audio in the tab.
    useEffect(() => {
        if (isRecording) {
            mediaRecorder.start();
        } else {
            mediaRecorder.stop();
        }
    }, [isRecording])


    // Save the recording if the user adds a title by making a FETCH request  
    // to the server at port 5000 to save a user's recording.
    useEffect(() => {
        if (isValidTitle(recordingTitle)) {
            fetch("http://localhost:5000/recording", {
                method: 'post',
                headers: new Headers({ 
                    "Access-Control-Allow-Origin": "http://localhost:5000",
                    "Accept": "application/json", 
                    "Content-Type": "application/json",
                }),
                body: JSON.stringify({ 
                    title: recordingTitle,
                    fileData: fileData,
                }),
                mode: 'cors'
            })
                .then(res => res.json())
                .catch(err => console.error(err))
        }
    }, [recordingTitle])


    return (
        <>
            <div className="flex flex-column">
                <div className="flex round-btn-container">
                    <Button type="checkbox" className="round-btn">Stop</Button>
                    <Button type="checkbox" className="round-btn" onChange={() => setIsRecording(!isRecording)}>Record</Button>
                    <Button type="checkbox" className="round-btn">Play</Button>
                </div>
                <div className="flex rect-btn-container">
                    <Button type="button" className="rect-btn">About</Button>
                    <FullscreenButton />
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