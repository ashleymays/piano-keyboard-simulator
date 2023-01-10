/*
    FILE: FeatureControls.js
    PURPOSE: Render the features section of the virtual keyboard, including the 'soften', 'sustain', and
            'keyboard label' buttons. Also defines the state variables corresponding to the features.
            The keyboard label functionality is defined in this file, whereas the sustain and soften functionality
            is defined in Piano.js since it is associated with piano output.
*/

import { useState, useEffect } from "react";
import Button from "./Button";
import OctaveControls from "./OctaveControls";

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
        })
    }, [isKeyboardLabelsShown])


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