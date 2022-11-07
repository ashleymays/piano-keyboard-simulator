import FeatureControls from "./FeatureControls";
import Screen from "./Screen";
import RecordingControls from "./RecordingControls";

function Controls(props) {
    return (
        <div className="controls">
            <RecordingControls context={props.context} />
            <Screen context={props.context} buffers={props.buffers} setBuffers={props.setBuffers} />
            <FeatureControls context={props.context} />
        </div>
    )
}

export default Controls;