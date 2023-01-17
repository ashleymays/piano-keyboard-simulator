import { useState, useEffect } from "react";
import closeButton from "../icons/close-button.png";

function PageOverlay(props) {
    const closeOverlay = () => {
        document.querySelector('.page-overlay').classList.remove('show');
    }

    return (
        <div className="flex-column page-overlay">
            <button id="page-overlay__close-btn" onClick={closeOverlay}>
                <img id="page-overlay__close-btn__img" src={closeButton} />
            </button>
            <h2 className="page-overlay__content">
                {props.children}
            </h2>
        </div>
    )
}

export default PageOverlay;