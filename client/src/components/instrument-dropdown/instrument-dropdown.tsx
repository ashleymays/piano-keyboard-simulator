import Dropdown from 'react-dropdown';
import { useInstrumentDropdown } from './use-instrument-dropdown';

export const InstrumentDropdown = () => {
  const { selected, instruments, loadAudioForInstrument } =
    useInstrumentDropdown();

  const newInstruments = ['Acoustic Grand', 'Electric Piano'];

  return (
    <Dropdown
      options={createDropdownOptions(newInstruments)}
      value={selected}
      // disabled={selected === null}
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
