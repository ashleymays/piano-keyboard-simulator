import PianoKey from "./PianoKey";
import pianoKeys from "../data/pianoKeys";

function Piano() {
  const keys = pianoKeys.map((pianoKey) => (
    <PianoKey
      key={pianoKey.computerKey}
      computerKey={pianoKey.computerKey}
      color={pianoKey.color}
    />
  ));
  return (
    <div id="piano" className="flex-row justify-space-btwn">
      {keys}
    </div>
  );
}

export default Piano;
