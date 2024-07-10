import { usePianoKeys } from './use-piano-keys';
import { useComputerKeyboard } from './use-computer-keyboard';
import type { PianoKey as PianoKeyType } from '~/features/piano-keys';

export const PianoKeys = () => {
  const { pianoKeys, pressedKeys, onPianoKeyPress, onPianoKeyRelease } =
    usePianoKeys();

  useComputerKeyboard({
    onKeyDown: onPianoKeyPress,
    onKeyUp: onPianoKeyRelease
  });

  return (
    <div
      className="piano-keys-wrapper"
      onMouseDown={onPianoKeyPress}
      onMouseUp={onPianoKeyRelease}
      onMouseOver={onPianoKeyRelease}
      onMouseOut={onPianoKeyRelease}
    >
      {pianoKeys.map((pianoKey) => (
        <PianoKey
          key={pianoKey.id}
          {...pianoKey}
          isPressed={pressedKeys[pianoKey.id] === true}
        />
      ))}
    </div>
  );
};

type PianoKeyProps = {
  id: PianoKeyType['id'];
  isPressed: boolean;
  type: PianoKeyType['type'];
};

const PianoKey = ({ id, isPressed, type }: PianoKeyProps) => {
  return (
    <button
      type="button"
      name="piano-key"
      className={clsx(
        type === 'natural' ? 'piano-key--white' : 'piano-key--black',
        isPressed && 'pressed-piano-key'
      )}
      value={id}
      aria-label={id}
    >
      {type === 'natural' && id}
    </button>
  );
};

const clsx = (...classNames: string[]) => {
  return classNames.filter(Boolean).join(' ');
};
