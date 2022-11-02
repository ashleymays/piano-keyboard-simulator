import Button from "./Button";

function FeatureControls() {
    return (
        <div className="flex-column feature-controls">
            <div className="feature-controls__top">
                <Button className="rect-btn rect-btn-gray">Sustain</Button>
                <Button className="rect-btn rect-btn-gray">Soften</Button>
                <Button className="rect-btn rect-btn-gray">Keyboard</Button>
            </div>
            <div className="feature-controls__bottom">
                <Button className="rect-btn rect-btn-gray">-</Button>
                <h4 className="octave-title">Octave</h4>
                <Button className="rect-btn rect-btn-gray">+</Button>
            </div>
        </div>
    )
}

export default FeatureControls;