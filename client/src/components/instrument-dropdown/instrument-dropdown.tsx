import Dropdown from 'react-dropdown';
import { useInstruments } from './use-instruments';

export const InstrumentDropdown = () => {
  const { currentInstrument, instruments, loadAudioForInstrument } =
    useInstruments();

  return (
    <Dropdown
      options={createDropdownOptions(instruments)}
      value={currentInstrument}
      placeholder="Choose an instrument..."
      className="instrument-dropdown"
      controlClassName="instrument-dropdown__selected"
      menuClassName="instrument-dropdown__options"
      onChange={({ value }) => loadAudioForInstrument(value)}
    />
  );
};

const createDropdownOptions = (instruments: string[]) => {
  return instruments.map((instrument) => ({
    value: instrument,
    label: instrument,
    className: 'instrument-dropdown__option'
  }));
};
