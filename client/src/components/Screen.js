import { useState, useEffect } from "react";

function Screen() {
    const [instrument, setInstrument] = useState("Acoustic Grand");

    useEffect(() => {
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
                    // convert base64 string to string of 
                    let str = window.atob(tree["Ab1.mp3"])

                    // convert to array
                    let arr = Uint8Array.from(str);

                    // get array buffer
                    let buffer = arr.buffer;
                    console.log(buffer)
                })
                .catch(err => console.error(err))
    }, [instrument])

    return (
        <div className="screen" onClick={() => setInstrument("Electric Piano")}></div>
    )
}

export default Screen;