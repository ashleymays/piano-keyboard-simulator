import { useModal } from './use-modal';
import musicNotesIcon from './music-notes-icon.svg';
import type { MouseEventHandler } from 'react';

/**
 * The introductory popup shown when the app is first started.
 *
 * @component
 */
export const Modal = () => {
  const { isOpen, close } = useModal();

  return (
    isOpen && (
      <div className="overlay">
        <div className="modal">
          <Icon />
          <Heading />
          <Description />
          <div className="modal-btns">
            <PlayButton onClick={close} />
            <SourceCodeButton />
          </div>
        </div>
      </div>
    )
  );
};

const Icon = () => {
  return (
    <img
      className="modal__icon"
      alt="Music Notes"
      src={musicNotesIcon}
    />
  );
};

const Heading = () => {
  return <h1 className="modal__heading">Piano Keyboard Simulator</h1>;
};

const Description = () => {
  return (
    <p className="modal__description">
      Use your computer keyboard or click the keys with your mouse to play.
      <br />
      <br />
      Also, press the octave buttons to raise or lower the pitch of the notes.
      <br />
      <br />
      <strong>Important Note: </strong>It may take a minute to start the
      keyboard. If it doesn't load, try reloading the page.
    </p>
  );
};

type PlayButtonProps = {
  onClick: MouseEventHandler;
};

const PlayButton = ({ onClick }: PlayButtonProps) => {
  return (
    <button
      type="button"
      className="modal-btn modal-btn--primary"
      onClick={onClick}
    >
      Play
    </button>
  );
};

const SourceCodeButton = () => {
  return (
    <a
      target="_blank"
      className="modal-btn modal-btn--secondary"
      href="https://github.com/ashleymays/piano-keyboard-simulator"
    >
      Source Code
    </a>
  );
};
