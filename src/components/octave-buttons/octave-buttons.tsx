import { useOctaveButtons } from './use-octave-buttons';
import type { MouseEventHandler } from 'react';

export const OctaveButtons = () => {
  const [raiseOctave, lowerOctave] = useOctaveButtons();

  return (
    <div className="octave-control-panel">
      <div className="octave-btn-container">
        <OctaveButton
          ariaLabel="Octave Up"
          onClick={raiseOctave}
        />
        <div />
        <OctaveButton
          ariaLabel="Octave Down"
          onClick={lowerOctave}
        />
      </div>
      <p className="octave-buttons__label">Octaves</p>
    </div>
  );
};

type OctaveButtonProps = {
  ariaLabel: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const OctaveButton = ({ ariaLabel, onClick }: OctaveButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="octave-btn"
      onClick={onClick}
    >
      <ArrowIcon />
    </button>
  );
};

const ArrowIcon = () => {
  return <span className="octave-btn__icon">&#x25B2;</span>;
};
