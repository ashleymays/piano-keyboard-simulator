export function Button({ title, isDefault, directory, onChange }) {
  return (
    <label>
      <input
        type="radio"
        name="instrument"
        value={directory}
        defaultChecked={isDefault}
        onChange={onChange}
      />
      <span className="instrument-btn">{title}</span>
    </label>
  );
}
