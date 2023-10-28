import { useEffect, useContext } from 'react';
import { getInstrumentAudioBuffers } from './Button.functions';
import { AudioBuffersContext, WebAudioContext } from '../../../audioBuffersContext';

function Button({ title, isDefault }) {
    const { buffers, setBuffers } = useContext(AudioBuffersContext);
    const audioContext = useContext(WebAudioContext);

    const handleClick = () => {
        getInstrumentAudioBuffers(title, audioContext)
            .then((audioBuffers) => {
                setBuffers({ ...audioBuffers });
            })
            .catch((error) => {
                throw error;
            });
    };

    useEffect(() => {
        const title = 'Acoustic Grand';
        getInstrumentAudioBuffers(title, audioContext)
            .then((audioBuffers) => {
                setBuffers({ ...audioBuffers });
            })
            .catch((error) => {
                throw error;
            });
    }, []);

    return (
        <label className="control-btn-container">
            <input
                type="radio"
                name="instrument"
                value={title}
                defaultChecked={isDefault}
                onChange={handleClick}
            />
            <span className="control-btn">{title}</span>
        </label>
    );
}

export default Button;
