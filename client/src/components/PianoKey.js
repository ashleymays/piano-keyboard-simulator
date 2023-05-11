function PianoKey(props) {
  return (
    <button
      name="piano-key"
      className={`flex-column justify-end ${props.keyColor}-key`}
      type="button"
      value={props.keyboardKey}
    >
      {props.keyboardKey}
    </button>
  );
}

export default PianoKey;
