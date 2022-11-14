import { useCallback, useState, useEffect } from "react";
import Tab from "./Tab";

function Screen(props) {
    const [instrument, setInstrument] = useState("Electric Piano");

    const { context, setBuffers } = props;

    const getAudioBuffers = useCallback((files) => {
        let audioBuffers = [];
        for (let file in files) {
            let req = new XMLHttpRequest;
            req.open('GET', "data:application/octet;base64," + files[file]);
            req.responseType = 'arraybuffer';
            req.onload = () => {
                let undecodedAudio = req.response;
                context.decodeAudioData(undecodedAudio, (data) => {
                    let pitch = file.slice(0, file.length - 4);
                    audioBuffers[pitch] = data;
                })
            }
            req.send();
        }
        return audioBuffers;
    })


    useEffect(() => {
        // Get instrument audio
        fetch("http://localhost:5000/audio", {
            method: 'post',
            headers: new Headers({ 
                "Access-Control-Allow-Origin": "http://localhost:5000",
                "Accept": "application/json", 
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ instrument: instrument }),
            mode: 'cors'
        })
            .then(res => res.json())
            .then(data => { 
                setBuffers(getAudioBuffers(data));
            })
            .catch(err => console.error(err))
    }, [instrument])

    return (
        <div className="screen">

        </div>
    )
}

export default Screen;