import Button from "./Button";

function FeatureControls() {
    return (
        <div className="flex-column feature-controls">
            <div className="main-feature-controls">
                <Button className="round-btn">Sustain</Button>
                <Button className="round-btn">Soften</Button>
                <Button className="round-btn">Keyboard</Button>
            </div>
            <div className="octave-controls">
                <Button className="rect-btn_sm rect-btn_gray">-</Button>
                <h4 className="octave-title">Octave</h4>
                <Button className="rect-btn_sm rect-btn_gray">+</Button>
            </div>
        </div>
    )
}

export default FeatureControls;