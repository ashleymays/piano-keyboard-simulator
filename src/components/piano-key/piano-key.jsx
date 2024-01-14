export function PianoKey({ computerKey, color, onClick }) {
  return (
    <button
      name="piano-key"
      className={`piano-key ${color}-key`}
      type="button"
      value={computerKey}
      onClick={onClick}
    >
      {computerKey}
    </button>
  );
}
