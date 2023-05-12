import { useState } from "react";
import Piano from "./components/Piano";
import Button from "./components/Button";
// import FeatureControls from "./components/FeatureControls";
import Screen from "./components/Screen";
import PlayButton from "./components/PlayButton";
import RecordButton from "./components/RecordButton";

const audioContext = new AudioContext();
const dest = audioContext.createMediaStreamDestination();
const mediaRecorder = new MediaRecorder(dest.stream);

function App() {
  const [buffers, setBuffers] = useState([]);
  const [hasSustain, setHasSustain] = useState(false);
  const [hasSoften, setHasSoften] = useState(false);

  return (
    <section className="piano-container absolute-center flex-column">
      <div className="top-row">
        <div className="flex-row">
          <Button>Sustain</Button>
          <Button>Soften</Button>
          <Button>Keyboard</Button>
        </div>
        <div className="flex-row">
          <PlayButton mediaRecorder={mediaRecorder} />
          <RecordButton mediaRecorder={mediaRecorder} />
        </div>
        <Screen audioContext={audioContext} setBuffers={setBuffers} />
        <div className="flex-column align-items-end">
          <h1>ARTURIA</h1>
          <h5>Virtual Keyboard</h5>
        </div>
      </div>

      <div className="bottom-row justify-space-btwn">
        <div className="octave-controls flex-column align-items-center">
          <div className="octave-controls__btns flex-column align-items-center justify-space-btwn">
            <button type="button">
              <h5>+</h5>
            </button>
            <div className="line" />
            <button type="button">
              <h5>-</h5>
            </button>
          </div>
          <h5>Octave</h5>
        </div>
        <Piano
          audioContext={audioContext}
          hasSustain={hasSustain}
          hasSoften={hasSoften}
          buffers={buffers}
          dest={dest}
        />
      </div>
    </section>
  );
}

export default App;
