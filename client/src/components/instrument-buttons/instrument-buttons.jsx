import { InstrumentButton } from '~/components/instrument-button';
import { instruments } from '~/common/instruments';
import { useInstrument } from './use-instrument';

export function InstrumentButtons() {
  const [activeInstrument, loadAudioForInstrument] = useInstrument(
    instruments[0].id
  );

  return (
    <div className="instrument-btns">
      {instruments.map((instrument) => (
        <InstrumentButton
          key={instrument.id}
          onClick={() => loadAudioForInstrument(instrument.id)}
          isActive={instrument.id === activeInstrument}
          title={instrument.title}
          value={instrument.id}
        />
      ))}
    </div>
  );
}
