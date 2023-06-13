function Button(props) {
  return (
    <button
      type="button"
      onChange={props.onChange}
      className="control-btn flex-column align-items-center justify-space-btwn"
    >
      <div className="control-btn__design" />
      <h5 className="control-btn__title">{props.children}</h5>
    </button>
  );
}

export default Button;
