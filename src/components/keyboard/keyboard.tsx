import { PianoKeys } from '~/components/piano-keys';
import { OctaveButtons } from '~/components/octave-buttons';
import { InstrumentDropdown } from '~/components/instrument-dropdown';

export const Keyboard = () => {
  return (
    <section className="keyboard">
      <div className="keyboard__row--top">
        <header className="keyboard__header">
          <h1 className="keyboard__heading">Piano Keyboard</h1>
          <h2 className="keyboard__subheading">synthesizer</h2>
          <div className="keyboard__dots">
            <span />
            <span />
            <span />
          </div>
        </header>
        <InstrumentDropdown />
      </div>
      <div className="keyboard__row--bottom">
        <OctaveButtons />
        <PianoKeys />
      </div>
    </section>
  );
};
