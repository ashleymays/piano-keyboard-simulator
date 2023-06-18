function PianoKey({ computerKey, color }) {
  return (
    <button
      name="piano-key"
      className={`flex-column justify-end ${color}-key`}
      type="button"
      value={computerKey}
    >
      {computerKey}
    </button>
  );
}

export default PianoKey;
