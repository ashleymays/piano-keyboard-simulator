import { useModal } from './use-modal';

export const Modal = () => {
  const { isOpen, close } = useModal();

  return (
    isOpen && (
      <div className="overlay">
        <div className="modal">
          <h1 className="modal__heading">Piano Keyboard</h1>
          <p className="modal__description">
            Use your keyboard or click the piano keys to play!
          </p>
          <button
            type="button"
            className="modal__close-btn"
            onClick={close}
          >
            Play
          </button>
        </div>
      </div>
    )
  );
};
