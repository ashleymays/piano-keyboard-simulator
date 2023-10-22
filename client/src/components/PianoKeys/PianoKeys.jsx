import { useEffect } from "react";
import PianoKey from "./PianoKey";
import pianoKeys from "../../data/pianoKeys";
import { playNote, endNote } from "./pianoFunctions";

function PianoKeys() {
  useEffect(() => {
    document.addEventListener("keydown", playNote);
    document.addEventListener("keyup", endNote);

    return () => {
      document.removeEventListener("keydown", playNote);
      document.removeEventListener("keyup", endNote);
    };
  });

  const keys = pianoKeys.map((pianoKey) => (
    <PianoKey key={pianoKey.computerKey} {...pianoKey} />
  ));
  return (
    <div className="piano-keys flex-row justify-content-space-btwn">{keys}</div>
  );
}

export default PianoKeys;
