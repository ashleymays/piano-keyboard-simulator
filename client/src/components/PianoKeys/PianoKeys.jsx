import PianoKey from 'src/components/PianoKey';
import { pianoKeys } from 'src/data';

function getPianoKeysAsArray() {
  var pianoKeyComponents = [];
  pianoKeys.forEach((pianoKeyInfo, computerKey) =>
    pianoKeyComponents.push(<PianoKey key={computerKey} {...pianoKeyInfo} />)
  );
  return pianoKeyComponents;
}

function PianoKeys() {
  return (
    <div className="piano-keys">
      {getPianoKeysAsArray()}
    </div>
  );
}

export default PianoKeys;
