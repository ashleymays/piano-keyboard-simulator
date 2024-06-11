import { useKeysMap } from '~/features/keys-map';
import type { IPianoKey } from '~/features/keys-map/types';

export const PianoKeys = () => {
  const [keysMap] = useKeysMap();
  const computerKeys = Array.from(keysMap.keys());

  return (
    <div className="piano-keys">
      {computerKeys.map((computerKey) => (
        <PianoKey
          key={computerKey}
          computerKey={computerKey}
          type={keysMap.get(computerKey)!.type}
        />
      ))}
    </div>
  );
};

type PianoKeyProps = {
  computerKey: string;
  type: IPianoKey['type'];
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
