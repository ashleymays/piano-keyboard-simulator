/*
    FILE: OctaveControls.js
    PURPOSE: Render the octave control buttons and define their behavior.
*/

import Button from "./Button";
import keysMap from "../contents/keysMap";

// Shift the octave properties in the keysMap down 1, making each note an octave lower.
const moveOctaveDown = (e) => {
    e.preventDefault();
    let lowestNote = keysMap.get('q');
    if (lowestNote.octave > 1) {
        keysMap.forEach((item) => {
            --item.octave;
        })
    }
}

// Shift the octave properties in the keysMap up 1, making each note an octave higher.
const moveOctaveUp = (e) => {
    e.preventDefault();
    let highestNote = keysMap.get('/');
    if (highestNote.octave < 8) {
        keysMap.forEach((item) => {
            ++item.octave;
        })
    }
}

function OctaveControls() {
    return (
        <div className="flex rect-btn-container">
            <Button type="button" className="rect-btn" onClick={moveOctaveDown} />
            <h4 className="label">Octave</h4>
            <Button type="button" className="rect-btn" onClick={moveOctaveUp} />
        </div>
    )
}

export default OctaveControls;