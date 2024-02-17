import { PianoKey } from '~/components/piano-key';
import { pianoKeys } from '~/data';

export function PianoKeyList() {
  return (
    <div className="piano-key-list">
      {pianoKeys.values().map((pianoKey) => (
        <PianoKey
          key={pianoKey.computerKey}
          {...pianoKey}
        />
      ))}
    </div>
  );
}
