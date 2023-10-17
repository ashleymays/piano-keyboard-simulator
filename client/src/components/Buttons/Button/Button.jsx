function Button({ title, onChange }) {
  return (
    <button type="button" onChange={onChange} className="">
      <p className="control-btn__title">{title}</p>
    </button>
  );
}

export default Button;
