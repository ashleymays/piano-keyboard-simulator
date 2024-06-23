import { useOctaveButtons } from '~/hooks/use-octave-buttons';
import { UpArrowIcon, DownArrowIcon } from '~/components/arrow-icon';
import type { MouseEventHandler } from 'react';

export const OctaveButtons = () => {
  const { raiseOctave, lowerOctave } = useOctaveButtons();

  return (
    <div className="octave-controls-wrapper">
      <div className="octave-btns-wrapper">
        <OctaveButton
          direction="UP"
          onClick={raiseOctave}
        />
        <div />
        <OctaveButton
          direction="DOWN"
          onClick={lowerOctave}
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
