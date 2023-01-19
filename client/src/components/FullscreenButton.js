import Button from "./Button";
import { useEffect } from "react";

function FullscreenButton() {
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

    return <Button type="checkbox" className="round-btn fullscreen-btn">Fullscreen</Button>
}

export default FullscreenButton;