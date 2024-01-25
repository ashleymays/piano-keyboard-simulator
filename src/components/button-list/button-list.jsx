import { useContext } from 'react';
import { MainContext } from '~/context';
import { Button } from '~/components/button';
import { getAudioBuffers } from '~/helpers/get-audio';

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

export function ButtonList() {
  const { buffers } = useContext(MainContext);

  const getAudio = async (directory) => {
    try {
      if (buffers.current[directory]) {
        console.log('Cache hit');
        console.log(buffers.current[directory]);
      } else {
        const loadedBuffers = await getAudioBuffers(directory);
        buffers.current[directory] = { ...loadedBuffers };
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="button-list">
      {buttons.map((button) => (
        <Button
          key={button.title}
          onChange={() => getAudio(button.directory)}
          {...button}
        />
      ))}
    </div>
  );
}
