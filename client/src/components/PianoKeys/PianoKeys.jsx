import { useState, useEffect } from "react";
import PianoKey from "./PianoKey";
import pianoKeys from "../../data/pianoKeys";
import { playNote, endNote } from "./pianoFunctions";

function PianoKeys() {
  const [isKeyDown, setIsKeyDown] = useState(false);

  const handleMouseDownAndTouchStart = (event) => {
    setIsKeyDown(true);
    playNote(event);
  };

  const handleMouseUpAndTouchEnd = (event) => {
    setIsKeyDown(false);
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
    return isKeyDown && PIANO_KEY_NAME === currentElementName;
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
      onTouchStart={handleMouseDownAndTouchStart}
      onTouchEnd={handleMouseUpAndTouchEnd}
    >
      {keys}
    </div>
  );
}

export default PianoKeys;
