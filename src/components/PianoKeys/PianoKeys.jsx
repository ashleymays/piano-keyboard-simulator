import PianoKey from 'src/components/PianoKey';
import { pianoKeys } from 'src/data';

function PianoKeys() {
  return (
    <div className="piano-keys">
      {pianoKeys.forEach((pianoKeyInfo, computerKey) => (
        <PianoKey key={computerKey} {...pianoKeyInfo} />
      ))}
    </div>
  );
}

export default PianoKeys;
