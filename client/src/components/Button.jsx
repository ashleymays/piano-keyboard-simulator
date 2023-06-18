function Button({ title, onChange }) {
  return (
    <button
      type="button"
      onChange={onChange}
      className="control-btn flex-column align-items-center justify-space-btwn"
    >
      <div className="control-btn__design" />
      <h5 className="control-btn__title">{title}</h5>
    </button>
  );
}

export default Button;
