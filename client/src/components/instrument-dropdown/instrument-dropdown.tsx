import Dropdown from 'react-dropdown';
import { UpArrowIcon, DownArrowIcon } from '~/components/arrow-icon';
import { useInstruments } from './use-instruments';

const createDropdownOptions = (instruments: string[]) => {
  return instruments.map((instrument) => ({
    value: instrument,
    label: instrument,
    className: 'instrument-dropdown__option'
  }));
};

export const InstrumentDropdown = () => {
  const instruments = useInstruments();

  if (instruments.length === 0) {
    return null;
  }

  const options = createDropdownOptions(instruments);

  if (options.length === 0) {
    return null;
  }

  return (
    <Dropdown
      options={options}
      value={options[0].value}
      className="instrument-dropdown"
      controlClassName="instrument-dropdown__selected"
      menuClassName="instrument-dropdown__options"
      arrowClosed={<DownArrowIcon />}
      arrowOpen={<UpArrowIcon />}
    />
  );
};
