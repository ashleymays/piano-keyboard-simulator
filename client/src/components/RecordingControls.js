import Button from "./Button";
import { useState, useEffect } from "react";

function RecordingControls() {
    const [isFullscreen, setIsFullscreen] = useState(false)

    const handleFullscreen = () => {
        if (document.fullscreenElement === null) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        setIsFullscreen(document.fullscreenElement !== null)
    }

    useEffect(() => {
        const fullscreenBtn = document.querySelector('.fullscreen-btn');
        fullscreenBtn.addEventListener('click', handleFullscreen)
        return () => {
            fullscreenBtn.removeEventListener('click', handleFullscreen)
        }
    }, [isFullscreen])

    return (
        <div className="flex flex-column">
            <div className="flex round-btn-container">
                <Button type="checkbox" className="round-btn">Stop</Button>
                <Button type="checkbox" className="round-btn">Record</Button>
                <Button type="checkbox" className="round-btn">Play</Button>
            </div>
            <div className="flex rect-btn-container">
                <Button type="button" className="rect-btn">About</Button>
                <h4 className="label">Menu</h4>
                <Button type="button"className="rect-btn fullscreen-btn">Fullscreen</Button>
            </div>
        </div>
    )
}

export default RecordingControls;