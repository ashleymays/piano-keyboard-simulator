function PianoKey({ computerKey, color }) {
  const className = `piano-key ${color}-key`;
  return (
    <button
      name="piano-key"
      className={className}
      type="button"
      value={computerKey}
    >
      {computerKey}
    </button>
  );
}

export default PianoKey;
