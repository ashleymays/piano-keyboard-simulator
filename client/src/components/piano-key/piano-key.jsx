export function PianoKey({ color, computerKey, onClick }) {
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
