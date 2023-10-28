import { useState, useEffect, useCallback } from 'react';
import { useContext } from 'react';
import PianoKey from './PianoKey';
import pianoKeys from '../../data/pianoKeys';
import { AudioBuffersContext, WebAudioContext } from '../../audioBuffersContext';
import { playNote, endNote } from './PianoKeys.functions';

function getPianoKeysAsArray() {
    var pianoKeyComponents = [];
    pianoKeys.forEach((pianoKeyInfo, computerKey) =>
        pianoKeyComponents.push(<PianoKey key={computerKey} {...pianoKeyInfo} />)
    );
    return pianoKeyComponents;
}

function PianoKeys() {
    const [isPianoKeyDown, setIsPianoKeyDown] = useState(false);
    const { buffers } = useContext(AudioBuffersContext);
    const audioContext = useContext(WebAudioContext);

    const handleKeyDown = useCallback((event) => {
        console.log(buffers);
        playNote(event, buffers, audioContext);
    });

    const handleKeyUp = useCallback((event) => {
        endNote(event);
    });

    const handleMouseDownAndTouchStart = useCallback((event) => {
        setIsPianoKeyDown(true);
        playNote(event, buffers, audioContext);
    });

    const handleMouseUpAndTouchEnd = useCallback((event) => {
        setIsPianoKeyDown(false);
        endNote(event);
    });

    const handleMouseOver = useCallback((event) => {
        if (isGlissandoEffectInUse(event)) {
            playNote(event, buffers, audioContext);
        }
    });

    const handleMouseOut = useCallback((event) => {
        if (isGlissandoEffectInUse(event)) {
            endNote(event);
        }
    });

    const handleMouseLeave = useCallback((event) => {
        setIsPianoKeyDown(false);
    });

    const isGlissandoEffectInUse = (event) => {
        const PIANO_KEY_NAME = 'piano-key';
        const currentElementName = event.target.name;
        return isPianoKeyDown && PIANO_KEY_NAME === currentElementName;
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    });

    const keys = getPianoKeysAsArray();
    return (
        <div
            className="piano-keys flex-row justify-content-space-btwn"
            onMouseDown={handleMouseDownAndTouchStart}
            onMouseUp={handleMouseUpAndTouchEnd}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseDownAndTouchStart}
            onTouchEnd={handleMouseUpAndTouchEnd}
        >
            {keys}
        </div>
    );
}

export default PianoKeys;
