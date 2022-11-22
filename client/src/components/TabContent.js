function TabContent(props) {
    const title = props.children;
    const icon = props.icon;
    const url = props.url;
    const checked = props.checked;
    const currentTab = props.currentTab;
    const onChange = props.onChange;

    if (currentTab === "Instruments") {
        return (
            <label>
                <input type="radio" name="instrument" checked={checked} onChange={onChange} />
                <span className="tab-content">
                    <img className="tab-content__icon" src={icon} />
                    <h4 className="tab-content__title">{title}</h4>
                    <a href={url}></a>
                </span>
            </label>
        )
    } else if (currentTab === "Recordings") {
        return (
            <div className="tab-content">
                <h6 className="tab-content__title">`</h6>
                <h6 className="tab-content__title">{title}</h6>
            </div>
        )
    }
}

export default TabContent;