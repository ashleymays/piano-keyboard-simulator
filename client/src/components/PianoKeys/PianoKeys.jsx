import { useState, useEffect } from "react";
import PianoKey from "./PianoKey";
import pianoKeys from "../../data/pianoKeys";
import { playNote, endNote } from "./PianoKeys.functions";

function PianoKeys() {
  const [isPianoKeyDown, setIsPianoKeyDown] = useState(false);

  const handleMouseDownAndTouchStart = (event) => {
    setIsPianoKeyDown(true);
    playNote(event);
  };

  const handleMouseUpAndTouchEnd = (event) => {
    setIsPianoKeyDown(false);
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

  const handleMouseLeave = (event) => {
    setIsPianoKeyDown(false);
  };

  const isGlissandoEffectInUse = (event) => {
    const PIANO_KEY_NAME = "piano-key";
    const currentElementName = event.target.name;
    return isPianoKeyDown && PIANO_KEY_NAME === currentElementName;
  };

  useEffect(() => {
    document.addEventListener("keydown", playNote);
    document.addEventListener("keyup", endNote);

    return () => {
      document.removeEventListener("keydown", playNote);
      document.removeEventListener("keyup", endNote);
    };
  }, []);

  const keys = pianoKeys.map((pianoKey) => (
    <PianoKey key={pianoKey.computerKey} {...pianoKey} />
  ));
  return (
    <div
      className="piano-keys flex-row justify-content-space-btwn"
      onMouseDown={handleMouseDownAndTouchStart}
      onMouseUp={handleMouseUpAndTouchEnd}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseDownAndTouchStart}
      onTouchEnd={handleMouseUpAndTouchEnd}
    >
      {keys}
    </div>
  );
}

export default PianoKeys;
