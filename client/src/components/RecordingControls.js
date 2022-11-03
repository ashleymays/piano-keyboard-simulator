import Button from "./Button";

function RecordingControls() {
    return (
        <div className="flex-column">
            <div className="recording-controls">
                <Button className="round-btn round-btn_gray">Stop</Button>
                <Button className="round-btn round-btn_gray">Record</Button>
                <Button className="round-btn round-btn_gray">Play</Button>
            </div>
            <div className="menu-controls">
                <Button className="rect-btn_sm rect-btn_gray">About</Button>
                <h4 className="free-title">Menu</h4>
                <Button className="rect-btn_sm rect-btn_gray">Fullscreen</Button>
            </div>
        </div>
    )
}

export default RecordingControls;