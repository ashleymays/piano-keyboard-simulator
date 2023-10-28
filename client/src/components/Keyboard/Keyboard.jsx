import PianoKeys from '../PianoKeys';
import Buttons from '../Buttons';
import OctaveControls from '../OctaveControls';
import { useState } from 'react';
import { AudioBuffersContext, WebAudioContext } from '../../audioBuffersContext';

import ArturiaLogo from '../../assets/images/arturiaLogo.png';

function Keyboard() {
    const [buffers, setBuffers] = useState({});
    const [audioContext, setAudioContext] = useState(new AudioContext());

    return (
        <WebAudioContext.Provider value={audioContext}>
            <AudioBuffersContext.Provider value={{ buffers, setBuffers }}>
                <section className="keyboard-container center-self">
                    <div className="keyboard">
                        <div className="keyboard__top-row flex-row justify-content-space-btwn">
                            <Buttons />
                            <img className="keyboard__logo" alt="Arturia logo" src={ArturiaLogo} />
                        </div>
                        <div className="keyboard__bottom-row flex-row align-items-center justify-content-space-btwn">
                            <OctaveControls />
                            <PianoKeys />
                        </div>
                    </div>
                </section>
            </AudioBuffersContext.Provider>
        </WebAudioContext.Provider>
    );
}

export default Keyboard;
