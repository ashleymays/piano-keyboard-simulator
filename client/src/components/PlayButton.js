import Button from "./Button";
import { useEffect, useState, useRef } from "react";

function PlayButton(props) {
  const [shouldPlayRecording, setShouldPlayRecording] = useState(false);
  const [recordingURL, setRecordingURL] = useState("");
  let recordingAudio = useRef(null);

  const mediaRecorder = props.mediaRecorder;

  const createRecordingURL = () => {
    let blob = new Blob(recordingAudio.current, { type: "audio/mp3" });
    let url = URL.createObjectURL(blob);
    setRecordingURL(url);
  };

  mediaRecorder.ondataavailable = (e) => {
    recordingAudio.current = [e.data];
    createRecordingURL();
  };

  // Plays the most recent recording.
  useEffect(() => {
    const audioPlayer = document.getElementById("recording-audio-player");
    if (shouldPlayRecording) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }, [shouldPlayRecording]);

  return (
    <>
      <audio
        hidden
        id="recording-audio-player"
        src={recordingURL}
        type="audio/mp3"
      ></audio>
      <Button onChange={() => setShouldPlayRecording(!shouldPlayRecording)}>
        Play
      </Button>
    </>
  );
}

export default PlayButton;
