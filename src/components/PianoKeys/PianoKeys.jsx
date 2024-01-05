import PianoKey from "~/components/PianoKey";
import { pianoKeys } from "~/data";

function getPianoKeysAsArray() {
  const pianoKeyComponents = [];
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
