function PianoKey({ computerKey, color }) {
  return (
    <button
      name="piano-key"
      className={`piano-key ${color}-key`}
      type="button"
      value={computerKey}
    >
      {computerKey}
    </button>
  );
}

export default PianoKey;
