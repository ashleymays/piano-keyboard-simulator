import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getAudio } from '~/slices/audio.slice';
import { Button } from '~/components/button';
import { instruments } from '~/data';

export function ButtonList() {
  const [activeInstrument, setActiveInstrument] = useState(
    instruments[0].directory
  );
  const dispatch = useDispatch();

  const setAudioForInstrument = (newDirectory) => {
    setActiveInstrument(newDirectory);
    dispatch(getAudio(newDirectory));
  };

  useEffect(() => {
    setAudioForInstrument(activeInstrument);
  }, []);

  return (
    <div className="instrument-btn-list">
      {instruments.map(({ directory, title }) => (
        <Button
          key={directory}
          onClick={() => setAudioForInstrument(directory)}
          isActive={directory === activeInstrument}
          title={title}
          directory={directory}
        />
      ))}
    </div>
  );
}
