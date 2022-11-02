import FeatureControls from "./FeatureControls";
import Screen from "./Screen";
import RecordingControls from "./RecordingControls";

function Controls() {
    return (
        <div className="controls">
            <RecordingControls />
            <Screen />
            <FeatureControls />
        </div>
    )
}

export default Controls;