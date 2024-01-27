const upArrow = <>&uarr;</>;
const downArrow = <>&darr;</>;

export function OctaveControls() {
  return (
    <div className="octave-controls">
      <div className="octave-controls__btns">
        <button
          type="button"
          name="octave-up"
          className="octave-controls__btn-arrow"
        >
          {upArrow}
        </button>
        <div className="octave-controls__line" />
        <button
          type="button"
          name="octave-down"
          className="octave-controls__btn-arrow"
        >
          {downArrow}
        </button>
      </div>
      <p className="octave-controls__title">Octave</p>
    </div>
  );
}
