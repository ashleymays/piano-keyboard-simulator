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
          key={pianoKey.computerKey}
          {...pianoKey}
        />
      ))}
    </div>
  );
};

type PianoKeyProps = {
  computerKey: PianoKeyType['computerKey'];
  type: PianoKeyType['type'];
};

const PianoKey = ({ computerKey, type }: PianoKeyProps) => {
  return (
    <button
      type="button"
      name="piano-key"
      className={`piano-key--${type === 'natural' ? 'white' : 'black'}`}
      value={computerKey}
    />
  );
};
