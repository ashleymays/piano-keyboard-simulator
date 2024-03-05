import { InstrumentButton } from '~/components/instrument-button';
import { instruments } from '~/common/instruments';
import { useInstrument } from './use-instrument';

export function InstrumentButtons() {
  const [activeInstrument, loadAudioForInstrument] = useInstrument(
    instruments[0].directory
  );

  return (
    <div className="instrument-btns">
      {instruments.map(({ directory, title }) => (
        <InstrumentButton
          key={directory}
          onClick={() => loadAudioForInstrument(directory)}
          isActive={directory === activeInstrument}
          title={title}
          directory={directory}
        />
      ))}
    </div>
  );
}
