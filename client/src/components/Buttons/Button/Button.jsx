function Button({ title, onChange }) {
  return (
    <label className="control-btn-container">
      <input type="checkbox" onChange={onChange} />
      <span className="control-btn">{title}</span>
    </label>
  );
}

export default Button;
