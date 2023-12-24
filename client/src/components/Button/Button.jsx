function Button({ title, isDefault, directory, onChange }) {
  return (
    <label className="control-btn-container">
      <input
        type="radio"
        name="instrument"
        value={directory}
        defaultChecked={isDefault}
        onChange={onChange}
      />
      <span className="control-btn">{title}</span>
    </label>
  );
}

export default Button;
