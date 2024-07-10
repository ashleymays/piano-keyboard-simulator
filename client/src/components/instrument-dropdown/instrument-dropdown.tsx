import Dropdown from 'react-dropdown';
import { useInstrumentDropdown } from './use-instrument-dropdown';

export const InstrumentDropdown = () => {
  const { instrument, instrumentNames, loadInstrument } =
    useInstrumentDropdown();

  return (
    <Dropdown
      options={createDropdownOptions(instrumentNames)}
      value={instrument}
      placeholder="Choose an instrument..."
      className="instrument-dropdown"
      controlClassName="instrument-dropdown__selected"
      menuClassName="instrument-dropdown__options"
      onChange={({ value }) => loadInstrument(value)}
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
