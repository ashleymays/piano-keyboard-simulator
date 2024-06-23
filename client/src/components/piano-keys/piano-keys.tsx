import { usePianoKeys, type PianoKeyEvent } from './use-piano-keys';
import type { PianoKey as PianoKeyType } from '~/features/keys-map';

export const PianoKeys = () => {
  const { keysMap, playPianoKey, releasePianoKey } = usePianoKeys();

  return (
    <div className="piano-keys-wrapper">
      {keysMap.map((pianoKey) => (
        <PianoKey
          key={pianoKey.id}
          onMouseDown={playPianoKey}
          onMouseUp={releasePianoKey}
          {...pianoKey}
        />
      ))}
    </div>
  );
};

type PianoKeyProps = PianoKeyType & {
  onMouseDown: (event: PianoKeyEvent) => void;
  onMouseUp: (event: PianoKeyEvent) => void;
};

const PianoKey = ({
  id,
  isPressed,
  note,
  octave,
  type,
  onMouseDown,
  onMouseUp
}: PianoKeyProps) => {
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
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {type === 'natural' && pitch}
    </button>
  );
};

const clsx = (...classNames: string[]) => {
  return classNames.filter(Boolean).join(' ');
};
