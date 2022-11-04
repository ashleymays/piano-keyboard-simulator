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
        <div className="flex flex-column">
            <div className="flex round-btn-container">
                {buttons.stop}
                {buttons.record}
                {buttons.play}
            </div>
            <div className="flex rect-btn-container">
                {buttons.about}
                <h4 className="label">Menu</h4>
                {buttons.fullscreen}
            </div>
        </div>
    )
}

export default RecordingControls;