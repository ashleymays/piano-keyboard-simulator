import { useState, useRef } from 'react';
import { MainContext } from '../../mainContext';

function GlobalContext({ children }) {
    const [buffers, setBuffers] = useState({});
    const [isAppLoading, setIsAppLoading] = useState(true);
    const audioContext = useRef(new AudioContext());

    return (
        <MainContext.Provider
            value={{ buffers, setBuffers, audioContext, isAppLoading, setIsAppLoading }}
        >
            {children}
        </MainContext.Provider>
    );
}

export default GlobalContext;
