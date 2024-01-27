import { PianoKeyList } from '~/components/piano-key-list';
import { ButtonList } from '~/components/button-list';
import { OctaveControls } from '~/components/octave-controls';
import { arturiaLogo } from '~/images';

export function Keyboard() {
  return (
    <section className="keyboard-container">
      <div className="keyboard">
        <div className="keyboard__top-row">
          <ButtonList />
          <img
            className="keyboard__logo"
            alt="Arturia logo"
            src={arturiaLogo}
          />
        </div>
        <div className="keyboard__bottom-row">
          <OctaveControls />
          <PianoKeyList />
        </div>
      </div>
    </section>
  );
}
