import Button from "./Button";
import keysMap from "../contents/keysMap";

function OctaveControls() {
    const shiftOctaves = (amount) => {
        keysMap.forEach((item) => {
            item.octave += amount;
        })
    }

    const moveOctaveUp = (e) => {
        e.preventDefault();
        let characterOfHighestNote = '/';
        let highestNote = keysMap.get(characterOfHighestNote);
        if (highestNote.octave < 8) {
            shiftOctaves(1);
        }
    }

    const moveOctaveDown = (e) => {
        e.preventDefault();
        let characterOfLowestNote = 'q';
        let lowestNote = keysMap.get(characterOfLowestNote);
        if (lowestNote.octave > 1) {
            shiftOctaves(-1);
        }
    }

    return (
        <div className="flex rect-btn-container">
            <Button type="button" className="rect-btn" onClick={moveOctaveDown} />
            <h4 className="label">Octave</h4>
            <Button type="button" className="rect-btn" onClick={moveOctaveUp} />
        </div>
    )
}

export default OctaveControls;