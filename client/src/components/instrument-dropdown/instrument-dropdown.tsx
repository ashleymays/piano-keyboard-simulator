import Dropdown from 'react-dropdown';
import { UpArrowIcon, DownArrowIcon } from '~/components/arrow-icon';
import { useInstruments } from './use-instruments';

export const InstrumentDropdown = () => {
  const { instruments, loadAudioForInstrument } = useInstruments();

  return (
    <Dropdown
      options={createDropdownOptions(instruments)}
      placeholder="Choose an instrument..."
      disabled={typeof instruments === 'undefined'}
      className="instrument-dropdown"
      controlClassName="instrument-dropdown__selected"
      menuClassName="instrument-dropdown__options"
      arrowClosed={<DownArrowIcon />}
      arrowOpen={<UpArrowIcon />}
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
