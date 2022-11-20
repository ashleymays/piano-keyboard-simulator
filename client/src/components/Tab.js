import { useState } from "react";
import pianoIcon from '../icons/piano-icon.png';
import gameControllerIcon from '../icons/game-controller-icon.png';
import keyboardIcon from '../icons/keyboard-icon.png';
import musicBoxIcon from '../icons/music-box-icon.png';


const instruments = [
    {
        title: 'Acoustic Grand',
        icon: pianoIcon
    },
    {
        title: 'Electric Piano',
        icon: keyboardIcon
    },
    {
        title: 'Music Box',
        icon: musicBoxIcon
    },
    {
        title: '8-Bit',
        icon: gameControllerIcon
    }
]

const tabs = [
    {
        id: 'Instruments',
        content: instruments, 
    },
    {
        id: 'Recordings',
        content: []
    }
];

function Tab(props) {
    const [currentTab, setCurrentTab] = useState('Instruments');

    const instrument = props.instrument;
    const setInstrument = props.setInstrument;
    const contentArray = tabs.find(tabTitle => currentTab === tabTitle.id).content;

    // depending on the tab option, assign 'contentElements' variable to React elements
    let contentElements;

    if (currentTab === "Instruments") {
        contentElements = contentArray.map(item => 
            <label key={item.title}>
                <input type="radio" name="instrument" checked={instrument === item.title} onChange={() => setInstrument(item.title)} />
                <span className="tab-content">
                    <img className="tab-content__icon" src={item.icon} />
                    <h6 className="tab-content__title">
                        {item.title}
                    </h6>
                </span>
            </label>
        )
    } else {
        contentElements = contentArray.map((item, index) => 
            <div className="tab-content" key={item.title}>
                <h6 className="tab-content__title">{index + 1}</h6>
                <h6 className="tab-content__title">{item.title}</h6>
            </div>
        )
    }

    return (
        <>
            <div className="tab-titles">
                <h3 className={currentTab === "Instruments" ? "flex flex-column tab-title active-tab" : "flex flex-column tab-title"} 
                    onClick={() => setCurrentTab("Instruments")}>
                    Instruments
                </h3>
                <h3 className={currentTab === "Recordings" ? "flex flex-column tab-title active-tab" : "flex flex-column tab-title"} 
                    onClick={() => setCurrentTab("Recordings")}>
                    Recordings
                </h3>
            </div>
            <div className="tab-contents">{contentElements}</div>
        </>
    )
}

export default Tab;