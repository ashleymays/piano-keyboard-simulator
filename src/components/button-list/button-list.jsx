import { Button } from '~/components/button';
import { instruments } from '~/data';
import { useAudio } from './button-list.hook';

export function ButtonList() {
  const [instrumentDirectory, setInstrumentDirectory] = useAudio();

  return (
    <div className="instrument-btn-list">
      {instruments.map((instrument) => (
        <Button
          key={instrument.directory}
          onClick={() => setInstrumentDirectory(instrument.directory)}
          isActive={instrument.directory === instrumentDirectory}
          {...instrument}
        />
      ))}
    </div>
  );
}
