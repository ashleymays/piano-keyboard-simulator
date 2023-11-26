import { useState } from 'react';
import { MainContext } from 'src/context';
import LoadingIcon from 'src/components/LoadingIcon';

function GlobalContext({ children }) {
    const [buffers, setBuffers] = useState({});
    const [isAppLoading, setIsAppLoading] = useState(true);

    return (
        <MainContext.Provider value={{ buffers, setBuffers, isAppLoading, setIsAppLoading }}>
            <LoadingIcon isAppLoading={isAppLoading} />
            {children}
        </MainContext.Provider>
    );
}

export default GlobalContext;
