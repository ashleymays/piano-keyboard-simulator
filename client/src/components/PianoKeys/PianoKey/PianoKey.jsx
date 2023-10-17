function PianoKey({ computerKey, color }) {
  const className = `flex-column justify-content-end ${color}-key`;
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
