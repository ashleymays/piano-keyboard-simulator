import { useState, useEffect, useContext } from 'react';
import { MainContext } from '~/context';
import { Button } from '~/components/button';
import { getAudioBuffers } from './button-list.helpers';
import { instruments } from '~/data';

export function ButtonList() {
  const [directory, setDirectory] = useState(instruments[0].directory);

  const { buffers } = useContext(MainContext);

  const setBuffers = async () => {
    console.log('called');
    if (!buffers.current[directory]) {
      buffers.current[directory] = await getAudioBuffers(directory);
    }
    buffers.current._active = directory;
  };

  const setAudio = async () => {
    try {
      await setBuffers();
    } catch (error) {
      console.error(error);
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
