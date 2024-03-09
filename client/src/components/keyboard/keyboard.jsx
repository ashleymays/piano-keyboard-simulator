import { PianoKeys } from '~/components/piano-keys';
import { InstrumentButtons } from '~/components/instrument-buttons';
import { OctaveControls } from '~/components/octave-controls';
import { arturiaLogo } from '~/images';

export function Keyboard() {
  return (
    <section className="keyboard-container">
      <div className="keyboard">
        <div className="keyboard__top-row">
          <InstrumentButtons />
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
