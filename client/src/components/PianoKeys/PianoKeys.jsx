import PianoKey from 'src/components/PianoKey';
import pianoKeys from 'src/data/pianoKeys';

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
