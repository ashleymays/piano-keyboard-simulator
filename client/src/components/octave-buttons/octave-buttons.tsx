import { useOctaveButtons } from './use-octave-buttons';
import type { MouseEventHandler } from 'react';

export const OctaveButtons = () => {
  const { increment, decrement } = useOctaveButtons();

  return (
    <div className="octave-controls-wrapper">
      <div className="octave-btns-wrapper">
        <OctaveButton
          direction="UP"
          onClick={increment}
        />
        <div />
        <OctaveButton
          direction="DOWN"
          onClick={decrement}
        />
      </div>
      <p className="octave-controls-wrapper__label">Octaves</p>
    </div>
  );
};

type OctaveButtonProps = {
  direction: 'UP' | 'DOWN';
  onClick: MouseEventHandler;
};

const OctaveButton = ({ direction, onClick }: OctaveButtonProps) => {
  const Icon = direction === 'UP' ? UpArrowIcon : DownArrowIcon;

  return (
    <button
      type="button"
      aria-label={direction === 'UP' ? 'Raise Octave' : 'Lower Octave'}
      className="octave-btn"
      onClick={onClick}
    >
      <Icon />
    </button>
  );
};

const DownArrowIcon = () => {
  return <span className="arrow-icon">&#128899;</span>;
};

const UpArrowIcon = () => {
  return <span className="arrow-icon">&#128897;</span>;
};
