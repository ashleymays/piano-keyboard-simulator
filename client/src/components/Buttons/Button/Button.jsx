function Button({ title, isDefault, onChange }) {
    return (
        <label className="control-btn-container">
            <input
                type="radio"
                name="instrument"
                value={title}
                defaultChecked={isDefault}
                onChange={onChange}
            />
            <span className="control-btn">{title}</span>
        </label>
    );
}

export default Button;
