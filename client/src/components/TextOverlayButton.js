import Button from "./Button";
import closeButton from "../icons/close-button.png";

function TextOverlayButton(props) {
    const title = props.title;
    const shouldShowTextOverlay = props.shouldShowTextOverlay;
    const setCurrentTextOverlay = props.setCurrentTextOverlay;

    const showTextOverlay = () => {
        document.querySelector('.text-overlay').classList.add('show');
        setCurrentTextOverlay(title);
    }

    const hideTextOverlay = () => {
        document.querySelector('.text-overlay').classList.remove('show');
    }

    if (shouldShowTextOverlay) {
        return <Button type="button" className="rect-btn" onClick={showTextOverlay}>{title}</Button>
    } else {
        return (
            <button id="text-overlay__close-btn" onClick={hideTextOverlay}>
                <img id="text-overlay__close-btn__img" src={closeButton} />
            </button>
        )
    }
}

export default TextOverlayButton;