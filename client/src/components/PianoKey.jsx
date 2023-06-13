function PianoKey(props) {
  return (
    <button
      name="piano-key"
      className={`flex-column justify-end ${props.color}-key`}
      type="button"
      value={props.computerKey}
    >
      {props.computerKey}
    </button>
  );
}

export default PianoKey;
