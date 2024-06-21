import { usePianoKeys } from './use-piano-keys';
import type { PianoKey as PianoKeyType } from '~/features/keys-map';

export const PianoKeys = () => {
  const [keysMap, pressedKeys] = usePianoKeys();

  return (
    <div className="piano-keys-wrapper">
      {keysMap.map((pianoKey) => (
        <PianoKey
          key={pianoKey.id}
          pressedKeys={pressedKeys}
          {...pianoKey}
        />
      ))}
    </div>
  );
};

type PianoKeyProps = PianoKeyType & {
  pressedKeys: {
    [id: string]: boolean | undefined;
  };
};

const PianoKey = ({ id, type, note, octave, pressedKeys }: PianoKeyProps) => {
  const pitch = `${note}${octave}`;

  return (
    <button
      type="button"
      name="piano-key"
      className={`piano-key--${type === 'natural' ? 'white' : 'black'} ${pressedKeys[id] ? 'pressed-piano-key' : ''}`}
      value={id}
    >
      {type === 'natural' && pitch}
    </button>
  );
};
