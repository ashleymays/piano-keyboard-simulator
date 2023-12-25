import { handleOctaveUp, handleOctaveDown } from 'src/helpers/octaveControls';
import { pianoKeys } from 'src/data';

function OctaveControls() {
  return (
    <div className="octave-controls">
      <div className="octave-controls__btns">
        <button
          type="button"
          name="octave-up"
          className="octave-controls__btn-arrow"
          onClick={() => handleOctaveUp(pianoKeys)}
        >
          &uarr;
        </button>
        <div className="octave-controls__line" />
        <button
          type="button"
          name="octave-down"
          className="octave-controls__btn-arrow"
          onClick={() => handleOctaveDown(pianoKeys)}
        >
          &darr;
        </button>
      </div>
      <p className="octave-controls__title">Octave</p>
    </div>
  );
}

export default OctaveControls;
