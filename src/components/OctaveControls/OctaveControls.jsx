import { handleOctaveUp, handleOctaveDown } from './OctaveControls.helpers';

function OctaveControls() {
  return (
    <div className="octave-controls">
      <div className="octave-controls__btns">
        <button
          type="button"
          name="octave-up"
          className="octave-controls__btn-arrow"
          onClick={() => handleOctaveUp()}
        >
          &uarr;
        </button>
        <div className="octave-controls__line" />
        <button
          type="button"
          name="octave-down"
          className="octave-controls__btn-arrow"
          onClick={() => handleOctaveDown()}
        >
          &darr;
        </button>
      </div>
      <p className="octave-controls__title">Octave</p>
    </div>
  );
}

export default OctaveControls;
