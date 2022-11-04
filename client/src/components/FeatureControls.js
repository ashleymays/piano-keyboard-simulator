import Button from "./Button";

const buttons = {
    sustain: <Button type="checkbox" className="round-btn">Sustain</Button>,
    soften: <Button type="checkbox" className="round-btn">Soften</Button>,
    keyboard: <Button type="checkbox" className="round-btn">Keyboard</Button>,
    octaveDown: <Button type="button" className="rect-btn">-</Button>,
    octaveUp: <Button type="button" className="rect-btn">+</Button>
}

function FeatureControls() {
    return (
        <div className="flex flex-column">
            <div className="flex round-btn-container">
                {buttons.sustain}
                {buttons.soften}
                {buttons.keyboard}            
            </div>
            <div className="flex rect-btn-container">
                {buttons.octaveDown}
                <h4 className="label">Octave</h4>
                {buttons.octaveUp}
            </div>
        </div>
    )
}

export default FeatureControls;