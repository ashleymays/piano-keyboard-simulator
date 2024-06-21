import { usePianoKeys } from './use-piano-keys';
import type { PianoKey as PianoKeyType } from '~/features/keys-map';

export const PianoKeys = () => {
  const keysMap = usePianoKeys();

  return (
    <div className="piano-keys-wrapper">
      {keysMap.map((pianoKey) => (
        <PianoKey
          key={pianoKey.id}
          {...pianoKey}
        />
      ))}
    </div>
  );
};

const PianoKey = ({ id, type, note, octave }: PianoKeyType) => {
  const pitch = `${note}${octave}`;

  return (
    <button
      type="button"
      name="piano-key"
      className={`piano-key--${type === 'natural' ? 'white' : 'black'}`}
      value={id}
    >
      {type === 'natural' && pitch}
    </button>
  );
};
