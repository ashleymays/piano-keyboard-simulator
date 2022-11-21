function TabTitle(props) {
    const title = props.children;
    const setCurrentTab = props.setCurrentTab;
    const currentTab = props.currentTab;

    return (
        <h3 className={currentTab === title ? "flex flex-column tab-title active-tab" : "flex flex-column tab-title"} 
            onClick={() => setCurrentTab(title)}>
            {title}
        </h3>
    )
}

export default TabTitle;