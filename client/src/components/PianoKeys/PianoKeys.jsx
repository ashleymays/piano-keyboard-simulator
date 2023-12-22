import PianoKey from '@/components/PianoKey';
import { pianoKeys } from '@/data';

function getPianoKeysAsArray() {
  var pianoKeyComponents = [];
  pianoKeys.forEach((pianoKeyInfo, computerKey) =>
    pianoKeyComponents.push(<PianoKey key={computerKey} {...pianoKeyInfo} />)
  );
  return pianoKeyComponents;
}

function PianoKeys() {
  return (
    <div>
      {getPianoKeysAsArray()}
    </div>
  );
}

export default PianoKeys;
