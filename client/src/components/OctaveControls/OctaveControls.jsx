function OctaveControls() {
  return (
    <div className="octave-controls flex-column align-items-center">
      <div className="octave-controls__btns flex-column align-items-center justify-content-space-btwn">
        <button type="button" className="octave-controls__btn-arrow">
          &uarr;
        </button>
        <div className="octave-controls__line" />
        <button type="button" className="octave-controls__btn-arrow">
          &darr;
        </button>
      </div>
      <p>Octave</p>
    </div>
  );
}

export default OctaveControls;
