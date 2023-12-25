import { useEffect, useContext } from 'react';

import MainContext from 'src/context';
import Button from 'src/components/Button';

import getInstrumentAudio from 'src/helpers/getAudio';

const buttons = [
  {
    title: 'Acoustic Grand',
    directory: 'acoustic-grand',
    isDefault: true
  },
  {
    title: 'Electric Piano',
    directory: 'electric-piano',
    isDefault: false
  },
  {
    title: '8-Bit',
    directory: '8-bit',
    isDefault: false
  }
];

function Buttons() {
  const { setAudio, setIsAppLoading } = useContext(MainContext);

  const handleInstrumentAudio = async (title) => {
    try {
      setIsAppLoading(true);
      const audio = await getInstrumentAudio(title);
      setAudio({ ...audio });
    } catch (error) {
      throw error;
    } finally {
      setIsAppLoading(false);
    }
  };

  useEffect(() => {
    handleInstrumentAudio('acoustic-grand');
  }, []);

  return (
    <div className="buttons">
      {buttons.map((button) => (
        <Button
          key={button.title}
          onChange={() => handleInstrumentAudio(button.directory)}
          {...button}
        />
      ))}
    </div>
  );
}

export default Buttons;
