import { UpArrowIcon, DownArrowIcon } from '../arrow-icon';

export const OctaveButtons = () => {
  return (
    <div className="octave-controls-wrapper">
      <div className="octave-btns-wrapper">
        <OctaveButton direction="UP" />
        <div />
        <OctaveButton direction="DOWN" />
      </div>
      <p className="octave-controls-wrapper__label">Octaves</p>
    </div>
  );
};

type OctaveButtonProps = {
  direction: 'UP' | 'DOWN';
};

const OctaveButton = ({ direction }: OctaveButtonProps) => {
  const Icon = direction === 'UP' ? UpArrowIcon : DownArrowIcon;

  return (
    <button
      type="button"
      aria-label={direction === 'UP' ? 'Octave Up' : 'Octave Down'}
      className="octave-btn"
    >
      <Icon />
    </button>
  );
};
