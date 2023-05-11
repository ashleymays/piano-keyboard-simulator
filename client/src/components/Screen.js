import { useState, useEffect } from "react";
import instruments from "../contents/instruments";

function Screen(props) {
  const [instrument, setInstrument] = useState("Acoustic Grand");

  const audioContext = props.audioContext;
  const setBuffers = props.setBuffers;

  // Convert audio for each note for a particular instrument from base64 to arraybuffer format.
  const getAudio = (files) => {
    let audioBuffers = [];
    for (let file in files) {
      let req = new XMLHttpRequest();
      req.open("GET", "data:application/octet;base64," + files[file]);
      req.responseType = "arraybuffer";
      req.onload = () => {
        let undecodedAudio = req.response;
        audioContext.decodeAudioData(undecodedAudio, (audioFileData) => {
          // The pitch is equal to the file name without the extension.
          let pitch = file.slice(0, file.length - 4);
          audioBuffers[pitch] = audioFileData;
        });
      };
      req.send();
    }
    return audioBuffers;
  };

  // Get instrument audio and update the 'buffers' state to be the array returned
  // from the 'getAudio' function.
  useEffect(() => {
    fetch("http://localhost:5000/audio", {
      method: "post",
      headers: new Headers({
        "Access-Control-Allow-Origin": "http://localhost:5000",
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ instrument: instrument }),
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setBuffers(getAudio(data));
      })
      .catch((err) => console.error(err));
  }, [instrument]);

  return (
    <div className="screen">
      <div className="screen-content">
        {instruments.map((instrumentTitle) => (
          <label key={instrumentTitle}>
            <input
              type="radio"
              name="instrument"
              defaultChecked={instrumentTitle === instrument}
              onChange={() => setInstrument(instrumentTitle)}
            />
            <h4 className="screen-content__title">{instrumentTitle}</h4>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Screen;
