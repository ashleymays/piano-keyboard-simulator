import { PianoKey } from '~/components/piano-key';
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
