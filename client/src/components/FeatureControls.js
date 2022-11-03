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
        <div className="flex-column">
            <div className="main-feature-controls">
                {buttons.sustain}
                {buttons.soften}
                {buttons.keyboard}            
            </div>
            <div className="octave-controls">
                {buttons.octaveDown}
                <h4 className="free-title">Octave</h4>
                {buttons.octaveUp}
            </div>
        </div>
    )
}

export default FeatureControls;