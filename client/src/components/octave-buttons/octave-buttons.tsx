import { useOctaveButtons } from './use-octave-buttons';
import { ArrowIcon } from '~/components/arrow-icon';
import type { MouseEventHandler } from 'react';

export const OctaveButtons = () => {
  const { increment, decrement } = useOctaveButtons();

  return (
    <div className="octave-controls-wrapper">
      <div className="octave-btns-wrapper">
        <OctaveButton
          direction="up"
          onClick={increment}
        />
        <div />
        <OctaveButton
          direction="down"
          onClick={decrement}
        />
      </div>
      <p className="octave-controls-wrapper__label">Octaves</p>
    </div>
  );
};

type OctaveButtonProps = {
  direction: 'up' | 'down';
  onClick: MouseEventHandler;
};

const OctaveButton = ({ direction, onClick }: OctaveButtonProps) => {
  return (
    <button
      type="button"
      aria-label={direction === 'up' ? 'Raise Octave' : 'Lower Octave'}
      className="octave-btn"
      onClick={onClick}
    >
      <ArrowIcon direction={direction} />
    </button>
  );
};
