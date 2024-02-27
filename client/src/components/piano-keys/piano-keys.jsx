import { PianoKey } from '~/components/piano-key';
import { keysMap } from '~/common/keys-map';

export function PianoKeys() {
  const pianoKeysArray = Array.from(keysMap.values());

  return (
    <div className="piano-keys">
      {pianoKeysArray.map((pianoKey) => (
        <PianoKey
          key={pianoKey.computerKey}
          {...pianoKey}
        />
      ))}
    </div>
  );
}
