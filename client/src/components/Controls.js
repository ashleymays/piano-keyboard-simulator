import FeatureControls from "./FeatureControls";
import Screen from "./Screen";
import RecordingControls from "./RecordingControls";

function Controls(props) {
    return (
        <div className="controls">
            <RecordingControls 
                context={props.context} />

            <Screen 
                context={props.context} 
                setBuffers={props.setBuffers} />

            <FeatureControls 
                context={props.context}
                hasSustain={props.hasSustain}
                setHasSustain={props.setHasSustain}
                hasSoften={props.hasSoften}
                setHasSoften={props.setHasSoften} />
        </div>
    )
}

export default Controls;