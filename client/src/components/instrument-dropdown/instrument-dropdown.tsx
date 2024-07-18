import Dropdown from 'react-dropdown';
import { ArrowIcon } from '~/components/arrow-icon';
import { useInstrumentDropdown } from './use-instrument-dropdown';

export const InstrumentDropdown = () => {
  const { instrument, instrumentNames, selectInstrument } =
    useInstrumentDropdown();

  return (
    <Dropdown
      options={createDropdownOptions(instrumentNames)}
      value={instrument || ''}
      arrowOpen={<ArrowIcon direction="up" />}
      arrowClosed={<ArrowIcon direction="down" />}
      placeholder="Choose an instrument..."
      className="instrument-dropdown"
      controlClassName="instrument-dropdown__selected"
      menuClassName="instrument-dropdown__options"
      onChange={({ value }) => selectInstrument(value)}
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
