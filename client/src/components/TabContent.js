/*
    FILE: TabContent.js
    PURPOSE: Style the content of each tab, and decide which tab's contents need to be displayed using the 
            'currentTab' state that was passed as a property.
*/

import downloadIcon from '../icons/download-icon.png';

function TabContent(props) {
    const title = props.children;
    const icon = props.icon;
    const filePath = props.filePath;
    const isCurrentInstrument = props.isCurrentInstrument;
    const currentTab = props.currentTab;
    const onChange = props.onChange;
    const id = props.id;

    if (currentTab === "Instruments") {
        return (
            <label>
                <input type="radio" name="instrument" checked={isCurrentInstrument} onChange={onChange} />
                <span className="tab-content">
                    <img className="tab-content__icon" src={icon} />
                    <h4 className="tab-content__title">{title}</h4>
                </span>
            </label>
        )
    } else if (currentTab === "Recordings") {
        return (
            <div className="tab-content">
                <h4 className="tab-content__title light-text">{id}</h4>
                <h4 className="tab-content__title light-text">{title}</h4>
                <img className="tab-content__icon" src={downloadIcon} />
            </div>
        )
    }
}

export default TabContent;