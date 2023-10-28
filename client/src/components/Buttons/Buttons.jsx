import { useEffect, useContext } from 'react';
import { MainContext } from '../../mainContext';
import { getInstrumentAudioBuffers } from './Buttons.functions';
import LoadingIcon from '../LoadingIcon';
import Button from './Button';
import buttonsData from '../../data/buttons';

function Buttons() {
    const { setBuffers, isAppLoading, setIsAppLoading } = useContext(MainContext);

    const handleInstrumentAudio = async (title) => {
        try {
            setIsAppLoading(true);
            const audioBuffers = await getInstrumentAudioBuffers(title);
            setBuffers({ ...audioBuffers });
        } catch (error) {
            throw error;
        } finally {
            setIsAppLoading(false);
        }
    };

    useEffect(() => {
        handleInstrumentAudio('Acoustic Grand');
    }, []);

    const buttons = buttonsData.map((button) => (
        <Button
            key={button.title}
            onChange={() => handleInstrumentAudio(button.title)}
            {...button}
        />
    ));
    return (
        <>
            <div className="buttons flex-row justify-content-space-btwn">{buttons}</div>
            <LoadingIcon isAppLoading={isAppLoading} />
        </>
    );
}

export default Buttons;
