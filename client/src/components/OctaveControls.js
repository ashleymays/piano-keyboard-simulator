import Button from "./Button";
import keysMap from "../keysMap";

const moveOctaveDown = (e) => {
    e.preventDefault();
    let lowestNote = keysMap.get('q');
    if (lowestNote.octave > 1) {
        keysMap.forEach((item) => {
            --item.octave;
        })
    }
}

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
            <Button type="button" className="rect-btn" onClick={moveOctaveDown}>-</Button>
            <h4 className="label">Octave</h4>
            <Button type="button" className="rect-btn" onClick={moveOctaveUp}>+</Button>
        </div>
    )
}

export default OctaveControls;