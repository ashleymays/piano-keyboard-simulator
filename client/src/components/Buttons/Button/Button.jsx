function Button({ title, onChange }) {
  return (
    <button type="button" onChange={onChange} className="control-btn">
      {title}
    </button>
  );
}

export default Button;
