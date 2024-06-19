import {
  usePianoKeys,
  type PianoKey as PianoKeyType
} from '~/features/piano-keys';

export const PianoKeys = () => {
  const { pianoKeys } = usePianoKeys();

  return (
    <div className="piano-keys-wrapper">
      {pianoKeys.map((pianoKey) => (
        <PianoKey
          key={pianoKey.id}
          {...pianoKey}
        />
      ))}
    </div>
  );
};

type PianoKeyProps = {
  id: PianoKeyType['id'];
  type: PianoKeyType['type'];
};

const PianoKey = ({ id, type }: PianoKeyProps) => {
  return (
    <button
      type="button"
      name="piano-key"
      className={`piano-key--${type === 'natural' ? 'white' : 'black'}`}
      value={id}
    />
  );
};
