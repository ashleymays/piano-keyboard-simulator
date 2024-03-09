import { shiftOctaveUp, shiftOctaveDown } from './octave-controls.helpers';

const ARROW_DIRECTIONS = {
  UP: 'UP',
  DOWN: 'DOWN'
};

export function OctaveControls() {
  return (
    <div className="octave-controls">
      <div className="octave-controls__btns">
        <Arrow
          onClick={shiftOctaveUp}
          direction={ARROW_DIRECTIONS.UP}
        />
        <div className="octave-controls__line" />
        <Arrow
          onClick={shiftOctaveDown}
          direction={ARROW_DIRECTIONS.DOWN}
        />
      </div>
      <p className="octave-controls__title">Octave</p>
    </div>
  );
}

function Arrow({ direction, onClick }) {
  const upArrow = <>&uarr;</>;
  const downArrow = <>&darr;</>;

  return (
    <button
      type="button"
      name="octave-up"
      className="octave-controls__btn-arrow"
      onClick={onClick}
    >
      {direction === ARROW_DIRECTIONS.UP ? upArrow : downArrow}
    </button>
  );
}
