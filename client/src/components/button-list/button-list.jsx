import { Button } from '~/components/button';
import { instruments } from '~/data';

export function ButtonList() {
  return (
    <div className="instrument-btn-list">
      {instruments.map((instrument) => (
        <Button
          key={instrument.directory}
          {...instrument}
        />
      ))}
    </div>
  );
}
