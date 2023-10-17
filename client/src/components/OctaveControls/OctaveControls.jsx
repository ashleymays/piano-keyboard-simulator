function OctaveControls() {
  return (
    <div className="octave-controls flex-column align-items-center">
      <div className="octave-controls__btns flex-column align-items-center justify-content-space-btwn">
        <button type="button">
          <h5>+</h5>
        </button>
        <div className="octave-controls__line" />
        <button type="button">
          <h5>-</h5>
        </button>
      </div>
      <h5>Octave</h5>
    </div>
  );
}

export default OctaveControls;
