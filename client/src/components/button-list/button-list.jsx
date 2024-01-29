import { Button } from '~/components/button';
import { instruments } from '~/data';
import { useInstrument } from './button-list.hook';

export function ButtonList() {
  const [activeInstrument, setAudioBuffersForInstrument] =
    useInstrument('electric-piano');

  return (
    <div className="instrument-btn-list">
      {instruments.map((instrument) => (
        <Button
          key={instrument.directory}
          onClick={() => setAudioBuffersForInstrument(instrument.directory)}
          isActive={instrument.directory === activeInstrument}
          {...instrument}
        />
      ))}
    </div>
  );
}
