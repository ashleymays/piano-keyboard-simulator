import { handleOctaveUp, handleOctaveDown } from 'src/lib/octaveControls';
import pianoKeys from 'src/data/pianoKeys';

function OctaveControls() {
  return (
    <div className="octave-controls flex-column align-items-center">
      <div className="octave-controls__btns flex-column align-items-center justify-content-space-btwn">
        <button
          type="button"
          name="octave-up"
          className="octave-controls__btn-arrow flex-column"
          onClick={() => handleOctaveUp(pianoKeys)}
        >
          &uarr;
        </button>
        <div className="octave-controls__line" />
        <button
          type="button"
          name="octave-down"
          className="octave-controls__btn-arrow flex-column justify-content-end"
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
