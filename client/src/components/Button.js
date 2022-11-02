function Button(props) {
    return (
        <div className="flex-column btn-container">
            <div className={props.className} />
            <h4 className="btn-title">{props.children}</h4>
        </div>
    )
}

export default Button;