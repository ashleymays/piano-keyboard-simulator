import { useModal } from './use-modal';
import musicNotesIcon from './music-notes-icon.svg';

export const Modal = () => {
  const { isOpen, close } = useModal();

  return (
    isOpen && (
      <div className="overlay">
        <div className="modal">
          <img
            className="modal__icon"
            alt="Music Notes"
            src={musicNotesIcon}
          />
          <h1 className="modal__heading">Piano Keyboard Simulator</h1>
          <p className="modal__description">
            Use your computer keyboard or click the keys with your mouse to
            play.
            <br />
            <br />
            Also, press the octave buttons to raise or lower the pitch of the
            notes.
            <br />
            <br />
            <strong>Note: </strong>There may be an initial delay while playing
            the keyboard. This only happens when first using the keyboard and
            after a long idle period. It shouldn’t last very long.
          </p>
          <div className="modal-btns">
            <button
              type="button"
              className="modal-btn modal-btn--primary"
              onClick={close}
            >
              Play
            </button>
            <a
              target="_blank"
              className="modal-btn modal-btn--secondary"
              href="https://github.com/ashleymays/piano-keyboard-simulator"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    )
  );
};
