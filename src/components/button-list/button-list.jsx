import { useState, useEffect, useContext } from 'react';
import { MainContext } from '~/context';
import { Button } from '~/components/button';
import { getAudioBuffers } from '~/helpers/get-audio';

const buttons = [
  {
    title: 'Acoustic Grand',
    directory: 'acoustic-grand'
  },
  {
    title: 'Electric Piano',
    directory: 'electric-piano'
  },
  {
    title: '8-Bit',
    directory: '8-bit'
  }
];

export function ButtonList() {
  const [directory, setDirectory] = useState('acoustic-grand');
  const { buffers, setIsAppLoading } = useContext(MainContext);

  const setBuffers = async () => {
    if (!buffers.current[directory]) {
      buffers.current[directory] = await getAudioBuffers(directory);
    }
    buffers.current._active = directory;
  };

  const setAudio = async () => {
    try {
      setIsAppLoading(true);
      await setBuffers();
    } catch (error) {
      console.error(error);
    } finally {
      setIsAppLoading(false);
    }
  };

  useEffect(() => {
    setAudio();
  }, [directory]);

  return (
    <div className="instrument-btn-list">
      {buttons.map((button) => (
        <Button
          key={button.directory}
          onClick={() => setDirectory(button.directory)}
          isActive={button.directory === directory}
          {...button}
        />
      ))}
    </div>
  );
}
