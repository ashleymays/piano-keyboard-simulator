export function Button({ title, directory, isActive, onClick }) {
  return (
    <button
      type="button"
      name="instrument"
      value={directory}
      onClick={onClick}
      className={`instrument-btn ${isActive ? 'active' : ''}`}
    >
      {title}
    </button>
  );
}
