import textOverlayContents from "../contents/textOverlayContents";
import TextOverlayButton from "./TextOverlayButton";

function TextOverlay(props) {
    const currentTextOverlay = props.currentTextOverlay;

    return (
        <div className="flex-column text-overlay">
            <TextOverlayButton shouldShowTextOverlay={false} />
            <h2 className="text-overlay__content">
                {textOverlayContents[currentTextOverlay]}
            </h2>
        </div>
    )
}

export default TextOverlay;