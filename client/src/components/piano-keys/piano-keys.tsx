import { usePianoKeys } from './use-piano-keys';
import type { PianoKey as PianoKeyType } from '~/features/piano-keys';

export const PianoKeys = () => {
  const {
    pianoKeys,
    onMouseDown,
    onMouseUp,
    onMouseOver,
    onMouseOut,
    onMouseLeave
  } = usePianoKeys();

  return (
    <div
      className="piano-keys-wrapper"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onMouseLeave={onMouseLeave}
    >
      {pianoKeys.map((pianoKey) => (
        <PianoKey
          key={pianoKey.id}
          {...pianoKey}
        />
      ))}
    </div>
  );
};

const PianoKey = ({ id, isPressed, note, octave, type }: PianoKeyType) => {
  const pitch = `${note}${octave}`;

  return (
    <button
      type="button"
      name="piano-key"
      className={clsx(
        type === 'natural' ? 'piano-key--white' : 'piano-key--black',
        isPressed && 'pressed-piano-key'
      )}
      value={id}
    >
      {type === 'natural' && pitch}
    </button>
  );
};

const clsx = (...classNames: string[]) => {
  return classNames.filter(Boolean).join(' ');
};
