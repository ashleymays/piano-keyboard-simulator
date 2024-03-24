/* eslint jsx-a11y/control-has-associated-label: 0 */
import { shiftOctaveUp, shiftOctaveDown } from './octave-controls.helpers';

export function OctaveControls() {
  return (
    <div className="octave-controls">
      <div className="octave-controls__arrow-btns">
        <Arrow
          Icon={UpArrowIcon}
          onClick={shiftOctaveUp}
        />
        <div className="octave-controls__line" />
        <Arrow
          Icon={DownArrowIcon}
          onClick={shiftOctaveDown}
        />
      </div>
      <p className="octave-controls__label">Octaves</p>
    </div>
  );
}

function Arrow({ Icon, onClick }) {
  return (
    <button
      type="button"
      name="octave-up"
      className="octave-controls__arrow-btn"
      onClick={onClick}
    >
      <Icon className="octave-controls__arrow-icon" />
    </button>
  );
}

function UpArrowIcon({ className }) {
  return <span className={className}>&#x25B2;</span>;
}

function DownArrowIcon({ className }) {
  return <span className={className}>&#x25BC;</span>;
}
