import { UpArrowIcon, DownArrowIcon } from '../arrow-icon';

export const OctaveButtons = () => {
  return (
    <div className="octave-control-panel">
      <div className="octave-btn-container">
        <OctaveButton type="UP" />
        <div />
        <OctaveButton type="DOWN" />
      </div>
      <p className="octave-control-panel__label">Octaves</p>
    </div>
  );
};

type OctaveButtonProps = {
  type: 'UP' | 'DOWN';
};

const OctaveButton = ({ type }: OctaveButtonProps) => {
  const Icon = type === 'UP' ? UpArrowIcon : DownArrowIcon;

  return (
    <button
      type="button"
      aria-label={type === 'UP' ? 'Octave Up' : 'Octave Down'}
      className="octave-btn"
    >
      <Icon />
    </button>
  );
};
