import { useState } from 'react';
import { MainContext } from '../context';

function GlobalContext({ children }) {
    const [buffers, setBuffers] = useState({});
    const [isAppLoading, setIsAppLoading] = useState(true);

    return (
        <MainContext.Provider value={{ buffers, setBuffers, isAppLoading, setIsAppLoading }}>
            {children}
        </MainContext.Provider>
    );
}

export default GlobalContext;
