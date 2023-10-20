function Button({ title, onChange }) {
  return (
    <label className="control-btn">
      <input type="button" onChange={onChange} />
      {title}
    </label>
  );
}

export default Button;
