import PianoKey from "./PianoKey";
import pianoKeys from "../../data/pianoKeys";

function PianoKeys() {
  const keys = pianoKeys.map((pianoKey) => (
    <PianoKey key={pianoKey.computerKey} {...pianoKey} />
  ));
  return (
    <div className="piano-keys flex-row justify-content-space-btwn">{keys}</div>
  );
}

export default PianoKeys;
