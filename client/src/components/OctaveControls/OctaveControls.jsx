function OctaveControls() {
  return (
    <div className="octave-controls flex-column align-items-center">
      <div className="octave-controls__btns flex-column align-items-center justify-content-space-btwn">
        <button type="button">
          <h3 className="octave-controls__btn-arrow">&uarr;</h3>
        </button>
        <div className="octave-controls__line" />
        <button type="button">
          <h3 className="octave-controls__btn-arrow">&darr;</h3>
        </button>
      </div>
      <p>Octave</p>
    </div>
  );
}

export default OctaveControls;
