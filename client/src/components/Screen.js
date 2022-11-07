import { useState, useEffect } from "react";


function Screen() {
    const [instrument, setInstrument] = useState("Acoustic Grand");

    const play = () => {
        // get instrument sounds
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
            .then(tree => {
                // CONVERTING BASE64 STRING TO ARRAY BUFFER
                let buffer;
                const context = new AudioContext();
                let req = new XMLHttpRequest;
                req.open('GET', "data:application/octet;base64," + tree["C3.mp3"]);
                req.responseType = 'arraybuffer';
                req.onload = () => {
                    let undecodedAudio = req.response;
                    context.decodeAudioData(undecodedAudio, (data) => {
                        let dest = context.createMediaStreamDestination();
                        let gainNode = context.createGain();
                        let bufferSource = context.createBufferSource();
                        bufferSource.buffer = data;
                        gainNode.gain.setValueAtTime(1.5, context.currentTime);
                        gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 10);
                        bufferSource.connect(gainNode);
                        gainNode.connect(dest);
                        gainNode.connect(context.destination);
                        bufferSource.start(context.currentTime);
                        console.log(buffer)
                    })
                }
                req.send();
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        
    }, [instrument])

    return (
        <div className="screen" onClick={play}></div>
    )
}

export default Screen;