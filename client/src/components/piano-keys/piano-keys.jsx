import { keysMap } from '~/common/keys-map';
import { usePianoKeys } from './use-piano-keys';

export function PianoKeys() {
  const pianoKeysArray = Array.from(keysMap.values());
  const [playPianoKey, stopPianoKey] = usePianoKeys();

  return (
    <div className="piano-keys">
      {pianoKeysArray.map((pianoKey) => (
        <PianoKey
          key={pianoKey.computerKey}
          onMouseDown={playPianoKey}
          onMouseUp={stopPianoKey}
          {...pianoKey}
        />
      ))}
    </div>
  );
}

function PianoKey({ color, computerKey, onMouseDown, onMouseUp }) {
  return (
    <button
      name="piano-key"
      className={`piano-key ${color}-key`}
      type="button"
      value={computerKey}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {computerKey}
    </button>
  );
}
