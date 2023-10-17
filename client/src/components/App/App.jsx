import PianoKeys from "../PianoKeys";
// import Buttons from "../Buttons";
import OctaveControls from "../OctaveControls";

function App() {
  return (
    <div className="keyboard-container">
      <div className="keyboard flex-column">
        <div className="top-row">
          <div className="flex-column">
            <h1>ARTURIA</h1>
            <h5>Virtual Keyboard</h5>
          </div>
          {/* <Buttons /> */}
        </div>

        <div className="bottom-row justify-content-space-btwn">
          <OctaveControls />
          <PianoKeys />
        </div>
      </div>
    </div>
  );
}

export default App;
