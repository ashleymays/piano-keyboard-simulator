import FullscreenButton from "./FullscreenButton";
import PlayButton from "./PlayButton";
import RecordButton from "./RecordButton";


function RecordingControls(props) {
    return (
        <div className="flex flex-column">
            <div className="flex round-btn-container">
                <FullscreenButton />
                <RecordButton />
                <PlayButton />
            </div>
            <div className="flex rect-btn-container">
                <Button type="button" className="rect-btn" onClick={() => openOverlay('about')}>About</Button>
                <Button type="button" className="rect-btn" onClick={() => openOverlay('help')}>Help</Button>
            </div>
        </div>
    )
}

export default RecordingControls;