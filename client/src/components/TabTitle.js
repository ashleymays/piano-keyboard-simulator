/*
    FILE: TabTitle.js
    PURPOSE: Style the title of each tab in the Screen component.
*/

function TabTitle(props) {
    const title = props.children;
    const setCurrentTab = props.setCurrentTab;
    const currentTab = props.currentTab;

    return (
        // Add the class 'active-tab' to the tab that is currently selected.
        <h3 className={currentTab === title ? "flex flex-column tab-title active-tab" : "flex flex-column tab-title"} 
            onClick={() => setCurrentTab(title)}>
            {title}
        </h3>
    )
}

export default TabTitle;