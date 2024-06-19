import { useKeysMap, type PianoKey as PianoKeyType } from '~/features/keys-map';

export const PianoKeys = () => {
  const { keysMap } = useKeysMap();

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
