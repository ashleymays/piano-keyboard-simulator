import PianoKeys from "../PianoKeys";
import Buttons from "../Buttons";
import OctaveControls from "../OctaveControls";
import ArturiaLogo from "../../assets/images/arturiaLogo.png";
import LoadingIcon from "../LoadingIcon";

function App() {
  return (
    <>
      <LoadingIcon />
      <section className="keyboard-container">
        <div className="keyboard">
          <div className="keyboard__top-row flex-row justify-content-space-btwn">
            <Buttons />
            <img
              className="keyboard__logo"
              alt="Arturia logo"
              src={ArturiaLogo}
            />
          </div>

          <div className="keyboard__bottom-row flex-row align-items-center justify-content-space-btwn">
            <OctaveControls />
            <PianoKeys />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
