import Dropdown from 'react-dropdown';
import { UpArrowIcon, DownArrowIcon } from '~/components/arrow-icon';
import { Spinner } from '~/components/spinner';
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

  return instruments.length === 0 ? (
    <Spinner />
  ) : (
    <Dropdown
      options={createDropdownOptions(instruments)}
      value={instruments[0] || 'Loading...'}
      className="instrument-dropdown"
      controlClassName="instrument-dropdown__selected"
      menuClassName="instrument-dropdown__options"
      arrowClosed={<DownArrowIcon />}
      arrowOpen={<UpArrowIcon />}
    />
  );
};
