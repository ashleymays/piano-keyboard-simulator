function Button({ title, isDefault }) {
    return (
        <label className="control-btn-container">
            <input type="radio" name="instrument" value={title} defaultChecked={isDefault} />
            <span className="control-btn">{title}</span>
        </label>
    );
}

export default Button;
