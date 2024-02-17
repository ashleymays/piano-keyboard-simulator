import { useSelector, useDispatch } from 'react-redux';
import { selectInstrument } from '~/slices/instrument.slice';
import { Button } from '~/components/button';
import { instruments } from '~/data';

export function ButtonList() {
  const selectedInstrument = useSelector((state) => state.instrument.value);
  const dispatch = useDispatch();

  console.log(selectedInstrument);

  return (
    <div className="instrument-btn-list">
      {instruments.map((instrument) => (
        <Button
          key={instrument.directory}
          onClick={() => dispatch(selectInstrument(instrument.directory))}
          isActive={instrument.directory === selectedInstrument}
          {...instrument}
        />
      ))}
    </div>
  );
}
