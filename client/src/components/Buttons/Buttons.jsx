import { useEffect, useContext } from 'react';

import MainContext from 'src/context';
import Button from 'src/components/Button';

import { getInstrumentAudioBuffers } from 'src/lib/getAudio';

const buttons = [
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
  const { setBuffers, setIsAppLoading } = useContext(MainContext);

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

  return (
    <div className="buttons">
      {buttons.map((button) => (
        <Button
          key={button.title}
          onChange={() => handleInstrumentAudio(button.title)}
          {...button}
        />
      ))}
    </div>
  );
}

export default Buttons;
