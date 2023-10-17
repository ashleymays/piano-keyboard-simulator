function Button({ title, onChange }) {
  return (
    <button
      type="button"
      onChange={onChange}
      className="flex-column align-items-center justify-content-space-btwn"
    >
      <div className="control-btn__design" />
      <h5 className="control-btn__title">{title}</h5>
    </button>
  );
}

export default Button;
