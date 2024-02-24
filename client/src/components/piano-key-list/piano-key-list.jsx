import { PianoKey } from '~/components/piano-key';
import { pianoKeys } from '~/data';

export function PianoKeyList() {
  const pianoKeysArray = Array.from(pianoKeys.values());

  return (
    <div className="piano-key-list">
      {pianoKeysArray.map((pianoKey) => (
        <PianoKey
          key={pianoKey.computerKey}
          {...pianoKey}
        />
      ))}
    </div>
  );
}
