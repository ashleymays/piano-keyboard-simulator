import Button from "./Button";

function FeatureControls() {
    return (
        <div className="flex-column">
            <div className="main-feature-controls">
                <Button className="round-btn round-btn_gray">Sustain</Button>
                <Button className="round-btn round-btn_gray">Soften</Button>
                <Button className="round-btn round-btn_gray">Keyboard</Button>
            </div>
            <div className="octave-controls">
                <Button className="rect-btn_sm rect-btn_gray">-</Button>
                <h4 className="free-title">Octave</h4>
                <Button className="rect-btn_sm rect-btn_gray">+</Button>
            </div>
        </div>
    )
}

export default FeatureControls;