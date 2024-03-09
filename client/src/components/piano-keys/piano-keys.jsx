import { keysMap } from '~/common/keys-map';
import { usePianoKeys } from './use-piano-keys';

export function PianoKeys() {
  const pianoKeysArray = Array.from(keysMap.values());
  const playPianoKey = usePianoKeys();

  return (
    <div className="piano-keys">
      {pianoKeysArray.map((pianoKey) => (
        <PianoKey
          key={pianoKey.computerKey}
          onClick={playPianoKey}
          {...pianoKey}
        />
      ))}
    </div>
  );
}

function PianoKey({ color, computerKey, onClick }) {
  return (
    <button
      name="piano-key"
      className={`piano-key ${color}-key`}
      type="button"
      value={computerKey}
      onClick={onClick}
    >
      {computerKey}
    </button>
  );
}
