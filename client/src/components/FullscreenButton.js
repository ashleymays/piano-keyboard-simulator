/*
    FILE: FullscreenButton.js
    PURPOSE: Render the fullscreen button and toggle it on and off. Separated into its own component
            to simplify RecordingControls.js.
*/

import Button from "./Button";
import { useEffect } from "react";

function FullscreenButton() {
    // Toggle fullscreen mode on and off.
    const handleFullscreen = () => {
        if (document.fullscreenElement === null) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    useEffect(() => {
        const fullscreenBtn = document.querySelector('.fullscreen-btn');
        fullscreenBtn.addEventListener('click', handleFullscreen)
        return () => {
            fullscreenBtn.removeEventListener('click', handleFullscreen)
        }
    }, [document.fullscreenElement])

    return <Button type="button" className="rect-btn fullscreen-btn">Fullscreen</Button>
}

export default FullscreenButton;