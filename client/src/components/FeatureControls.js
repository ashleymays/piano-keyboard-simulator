import { useState, useEffect } from "react";
import Button from "./Button";
import OctaveControls from "./OctaveControls";

function FeatureControls(props) {
    let hasSustain = props.hasSustain;
    let setHasSustain = props.setHasSustain;
    let hasSoften = props.hasSoften;
    let setHasSoften = props.setHasSoften;

    const [isKeyboardLabelsShown, setIsKeyboardLabelsShown] = useState(false);

    useEffect(() => {
        let pianoKeys = document.querySelectorAll("button[name='piano-key']");
        let newFontSize = isKeyboardLabelsShown ? "var(--key-font-size)" : "0";
        
        pianoKeys.forEach((item) => {
            item.style.fontSize = newFontSize;
        })
    })

    return (
        <div className="flex flex-column">
            <div className="flex round-btn-container">
                <Button type="checkbox" className="round-btn" onChange={() => setHasSustain(!hasSustain)}>Sustain</Button>
                <Button type="checkbox" className="round-btn" onChange={() => setHasSoften(!hasSoften)}>Soften</Button>
                <Button type="checkbox" className="round-btn" onChange={() => setIsKeyboardLabelsShown(!isKeyboardLabelsShown)}>Keyboard</Button>          
            </div>
            <OctaveControls />
        </div>
    )
}

export default FeatureControls;