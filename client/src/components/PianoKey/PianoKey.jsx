function PianoKey({ computerKey, color }) {
  return (
    <button
      name="piano-key"
      className={`piano-key variables.${color}-key`}
      type="button"
      value={computerKey}
    >
      {computerKey}
    </button>
  );
}

export default PianoKey;
