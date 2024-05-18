import { PianoKeys } from '~/components/piano-keys';
import { OctaveButtons } from '~/components/octave-buttons';

export const Keyboard = () => {
  return (
    <section className="keyboard">
      <div>
        <header className="keyboard__header">
          <h1 className="keyboard__heading">Piano Keyboard</h1>
          <h2 className="keyboard__subheading">synthesizer</h2>
          <div className="keyboard__dots">
            <span />
            <span />
            <span />
          </div>
        </header>
      </div>
      <div className="keyboard__row--bottom">
        <OctaveButtons />
        <PianoKeys />
      </div>
    </section>
  );
};
