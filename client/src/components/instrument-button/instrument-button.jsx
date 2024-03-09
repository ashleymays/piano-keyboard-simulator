export function InstrumentButton({ title, value, isActive, onClick }) {
  return (
    <button
      type="button"
      name="instrument"
      value={value}
      onClick={onClick}
      className={`instrument-btn ${isActive ? 'active' : ''}`}
    >
      {title}
    </button>
  );
}
