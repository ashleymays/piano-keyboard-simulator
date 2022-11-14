import Button from "./Button";
import { useCallback, useEffect } from "react";

function RecordingControls(props) {
    const handleFullscreen = useCallback(() => {
        if (document.fullscreenElement === null) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })

    useEffect(() => {
        const fullscreenBtn = document.querySelector('.fullscreen-btn');
        fullscreenBtn.addEventListener('click', handleFullscreen)
        return () => {
            fullscreenBtn.removeEventListener('click', handleFullscreen)
        }
    }, [document.fullscreenElement])

    return (
        <div className="flex flex-column">
            <div className="flex round-btn-container">
                <Button type="checkbox" className="round-btn">Stop</Button>
                <Button type="checkbox" className="round-btn">Record</Button>
                <Button type="checkbox" className="round-btn">Play</Button>
            </div>
            <div className="flex rect-btn-container">
                <Button type="button" className="rect-btn">Home</Button>
                <Button type="button"className="rect-btn fullscreen-btn">Fullscreen</Button>
            </div>
        </div>
    )
}

export default RecordingControls;