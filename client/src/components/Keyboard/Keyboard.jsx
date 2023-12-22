import PianoKeys from 'src/components/PianoKeys';
import Buttons from 'src/components/Buttons';
import OctaveControls from 'src/components/OctaveControls';

import arturiaLogo from 'src/assets/images/arturiaLogo.png';

function Keyboard() {
  return (
    <section className="keyboard-container">
      <div className="keyboard">
        <div className="keyboard__top-row">
          <Buttons />
          <img
            className="keyboard__logo"
            alt="Arturia logo"
            src={arturiaLogo}
          />
        </div>
        <div className="keyboard__bottom-row">
          <OctaveControls />
          <PianoKeys />
        </div>
      </div>
    </section>
  );
}

export default Keyboard;
