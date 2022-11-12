function Button(props) {
    return (
        <label onChange={props.onChange} className="flex flex-column btn-container">
            <input type={props.type} name="button" />
            <span className="flex flex-column">
                <div className={props.className} />
                <h4 className="flex label">{props.children}</h4>
            </span>
        </label>
    )
}

export default Button;