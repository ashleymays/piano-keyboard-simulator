import { useState, useEffect, useContext } from 'react';
import { MainContext } from '~/context';
import { Button } from '~/components/button';
import { getAudioBuffers } from '~/helpers/get-audio';
import { instruments } from '~/data';

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
      {instruments.map((instrument) => (
        <Button
          key={instrument.directory}
          onClick={() => setDirectory(instrument.directory)}
          isActive={instrument.directory === directory}
          {...instrument}
        />
      ))}
    </div>
  );
}
