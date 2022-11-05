import Button from "./Button";
import { useState, useEffect } from "react";

function RecordingControls() {
    const [isFullscreen, setIsFullscreen] = useState(false)

    const handleFullscreen = () => {
        if (document.fullscreenElement === null) {
            const elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE11 */
                elem.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
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