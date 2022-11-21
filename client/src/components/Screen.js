import { useCallback, useState, useEffect } from "react";
import TabTitle from "./TabTitle";
import TabContent from "./TabContent";
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

function Screen(props) {
    const [instrument, setInstrument] = useState("Acoustic Grand");
    const [currentTab, setCurrentTab] = useState('Instruments');

    const audioContext = props.audioContext;
    const setBuffers = props.setBuffers;

    const getAudioBuffers = useCallback((files) => {
        let audioBuffers = [];
        for (let file in files) {
            let req = new XMLHttpRequest;
            req.open('GET', "data:application/octet;base64," + files[file]);
            req.responseType = 'arraybuffer';
            req.onload = () => {
                let undecodedAudio = req.response;
                audioContext.decodeAudioData(undecodedAudio, (data) => {
                    let pitch = file.slice(0, file.length - 4);
                    audioBuffers[pitch] = data;
                })
            }
            req.send();
        }
        return audioBuffers;
    })


    // Get instrument audio and set buffers state
    useEffect(() => {
        fetch("http://localhost:5000/audio", {
            method: 'post',
            headers: new Headers({ 
                "Access-Control-Allow-Origin": "http://localhost:5000",
                "Accept": "application/json", 
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ instrument: instrument }),
            mode: 'cors'
        })
            .then(res => res.json())
            .then(data => { 
                setBuffers(getAudioBuffers(data));
            })
            .catch(err => console.error(err))
    }, [instrument])


    const contentArray = (currentTab === "Instruments") ? instruments : [];

    return (
        <div className="screen">
            <div className="tab-titles">
                <TabTitle currentTab={currentTab} setCurrentTab={setCurrentTab}>Instruments</TabTitle>
                <TabTitle currentTab={currentTab} setCurrentTab={setCurrentTab}>Recordings</TabTitle>
            </div>
            <div className="tab-contents">
                {
                    contentArray.map(item =>
                        <TabContent 
                                key={item.title} 
                                icon={item.icon} 
                                checked={item.title === instrument} 
                                currentTab={currentTab} 
                                onChange={() => setInstrument(item.title)}>
                            {item.title}
                        </TabContent>
                    )
                }
            </div>
        </div>
    )
}

export default Screen;