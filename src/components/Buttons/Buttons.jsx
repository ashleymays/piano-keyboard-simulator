import { useContext } from 'react';
import { Button } from '~/components/Button';
import { MainContext } from '~/context';
import { getInstrumentNotes } from '~/helpers/getInstrumentNotes';

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

export function Buttons() {
  const { setNotes, setIsAppLoading } = useContext(MainContext);

  const handleAudio = async (directory) => {
    try {
      setIsAppLoading(true);
      const notes = await getInstrumentNotes(directory);
      setNotes({ ...notes });
    } catch (error) {
      throw error;
    } finally {
      setIsAppLoading(false);
    }
  };

  return (
    <div className="buttons">
      {buttons.map((button) => (
        <Button
          key={button.title}
          onChange={() => handleAudio(button.directory)}
          {...button}
        />
      ))}
    </div>
  );
}
