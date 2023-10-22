import { useState, useEffect } from "react";
import PianoKey from "./PianoKey";
import pianoKeys from "../../data/pianoKeys";
import { playNote, endNote } from "./pianoFunctions";

function PianoKeys() {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = (event) => {
    setIsMouseDown(true);
    playNote(event);
  };

  const handleMouseUp = (event) => {
    setIsMouseDown(false);
    endNote(event);
  };

  const handleMouseOver = (event) => {
    if (isGlissandoEffectInUse(event)) {
      playNote(event);
    }
  };

  const handleMouseOut = (event) => {
    if (isGlissandoEffectInUse(event)) {
      endNote(event);
    }
  };

  const isGlissandoEffectInUse = (event) => {
    const PIANO_KEY_NAME = "piano-key";
    const currentElementName = event.target.name;
    return isMouseDown && PIANO_KEY_NAME === currentElementName;
  };

  useEffect(() => {
    document.addEventListener("keydown", playNote);
    document.addEventListener("keyup", endNote);
    document.addEventListener("touchstart", playNote);
    document.addEventListener("touchend", endNote);

    return () => {
      document.removeEventListener("keydown", playNote);
      document.removeEventListener("keyup", endNote);
      document.removeEventListener("touchstart", playNote);
      document.removeEventListener("touchend", endNote);
    };
  }, []);

  const keys = pianoKeys.map((pianoKey) => (
    <PianoKey key={pianoKey.computerKey} {...pianoKey} />
  ));
  return (
    <div
      className="piano-keys flex-row justify-content-space-btwn"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {keys}
    </div>
  );
}

export default PianoKeys;
