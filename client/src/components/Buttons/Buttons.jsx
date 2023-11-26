import { useEffect, useContext } from 'react';
import { MainContext } from '../../context';
import { getInstrumentAudioBuffers } from '../../lib/getAudio';
import LoadingIcon from '../LoadingIcon';
import Button from './Button';

const buttonsData = [
    {
        title: 'Acoustic Grand',
        isDefault: true
    },
    {
        title: 'Electric Piano',
        isDefault: false
    },
    {
        title: '8-Bit',
        isDefault: false
    }
];

function Buttons() {
    const { setBuffers, isAppLoading, setIsAppLoading } = useContext(MainContext);

    const handleInstrumentAudio = async (title) => {
        try {
            setIsAppLoading(true);
            const audioBuffers = await getInstrumentAudioBuffers(title);
            setBuffers({ ...audioBuffers });
        } catch (error) {
            console.log('Could not load audio.');
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
