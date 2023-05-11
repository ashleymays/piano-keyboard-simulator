import { useState, useEffect } from "react";
import Button from "./Button";

function FeatureControls(props) {
  let hasSustain = props.hasSustain;
  const setHasSustain = props.setHasSustain;
  let hasSoften = props.hasSoften;
  const setHasSoften = props.setHasSoften;

  const [isKeyboardLabelsShown, setIsKeyboardLabelsShown] = useState(false);

  // Toggle keyboard labels show/hide by changing the font size of the label.
  // A font size of '0' corresponds to hiding, whereas a font size of 'var(--key-font-size)'
  // is showing. The key font size is defined in the CSS file titled "index.css" in the src folder.
  useEffect(() => {
    let pianoKeys = document.querySelectorAll("button[name='piano-key']");
    let newFontSize = isKeyboardLabelsShown ? "var(--key-font-size)" : "0";

    pianoKeys.forEach((item) => {
      item.style.fontSize = newFontSize;
    });
  }, [isKeyboardLabelsShown]);

  return (
    <>
      <Button onChange={() => setHasSustain(!hasSustain)}>Sustain</Button>
      <Button onChange={() => setHasSoften(!hasSoften)}>Soften</Button>
      <Button onChange={() => setIsKeyboardLabelsShown(!isKeyboardLabelsShown)}>
        Keyboard
      </Button>
    </>
  );
}

export default FeatureControls;
