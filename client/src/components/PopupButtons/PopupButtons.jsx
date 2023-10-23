import { useState } from 'react';
import Popup from './Popup';
import popups from './PopupButtons.data';

function PopupButtons() {
    const [isOpen, setIsOpen] = useState(false);
    const [popupTitle, setPopupTitle] = useState('');
    const [popupText, setPopupText] = useState('');

    const togglePopup = (title, text) => {
        setIsOpen(true);
        setPopupTitle(title);
        setPopupText(text);
    };

    const popupButtons = popups.map(({ title, text }) => (
        <button key={title} type="button" onClick={() => togglePopup(title, text)}>
            {title}
        </button>
    ));

    return (
        <>
            <div className="popup-buttons flex-row align-items-center justify-content-space-btwn">
                {popupButtons}
            </div>
            {isOpen && (
                <Popup title={popupTitle} text={popupText} closePopup={() => setIsOpen(false)} />
            )}
        </>
    );
}

export default PopupButtons;
