import { useKeysMap, type PianoKey as PianoKeyType } from '~/features/keys-map';

export const PianoKeys = () => {
  const { keysMap } = useKeysMap();

  return (
    <div className="piano-keys-wrapper">
      {keysMap.map((pianoKey) => (
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
