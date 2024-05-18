export const OctaveButtons = () => {
  return (
    <div className="octave-control-panel">
      <div className="octave-btn-container">
        <OctaveButton ariaLabel="Octave Up" />
        <div />
        <OctaveButton ariaLabel="Octave Down" />
      </div>
      <p className="octave-control-panel__label">Octaves</p>
    </div>
  );
};

type OctaveButtonProps = {
  ariaLabel: string;
};

const OctaveButton = ({ ariaLabel }: OctaveButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="octave-btn"
    >
      <ArrowIcon />
    </button>
  );
};

const ArrowIcon = () => {
  return <span className="octave-btn__icon">&#x25B2;</span>;
};
