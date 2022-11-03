import Button from "./Button";

function RecordingControls() {
    const buttons = {
        stop: <Button type="checkbox" className="round-btn">Stop</Button>,
        record: <Button type="checkbox" className="round-btn">Record</Button>,
        play: <Button type="checkbox" className="round-btn">Play</Button>,
        about: <Button className="rect-btn">About</Button>,
        fullscreen: <Button className="rect-btn">Fullscreen</Button>
    }

    return (
        <div className="flex-column">
            <div className="recording-controls">
                {buttons.stop}
                {buttons.record}
                {buttons.play}
            </div>
            <div className="menu-controls">
                {buttons.about}
                <h4 className="free-title">Menu</h4>
                {buttons.fullscreen}
            </div>
        </div>
    )
}

export default RecordingControls;