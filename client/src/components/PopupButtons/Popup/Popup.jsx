function Popup({ title,text, closePopup }) {
    return (
        <>
            <div className="overlay" />
            <div className="popup flex-column align-items-center center-self">
                <h2 className="popup__title">{title}</h2>
                <p className="popup__text">{text}</p>
                <button type="button" onClick={closePopup}>
                    <p className="popup__close-btn">Close</p>
                </button>
            </div>
        </>
    );
}

export default Popup;
