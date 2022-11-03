function Button(props) {
    return (
        <label className="flex-column btn-container">
            <input type={props.type} name="button" />
            <span className="flex-column">
                <div className={props.className} />
                <h4 className="btn-title">{props.children}</h4>
            </span>
        </label>
    )
}

export default Button;