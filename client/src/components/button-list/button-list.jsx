import { Button } from '~/components/button';
import { instruments } from '~/data';
import { useInstrument } from './button-list.hook';

export function ButtonList() {
  const [activeInstrument, setAudioForInstrument] = useInstrument(
    instruments[0].directory
  );

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
