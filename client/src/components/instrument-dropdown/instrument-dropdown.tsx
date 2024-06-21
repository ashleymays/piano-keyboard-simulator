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
  const [instruments, currentInstrument, loadAudio] = useInstruments();

  return (
    <Dropdown
      options={createDropdownOptions(instruments)}
      value={currentInstrument}
      className="instrument-dropdown"
      controlClassName="instrument-dropdown__selected"
      menuClassName="instrument-dropdown__options"
      arrowClosed={<DownArrowIcon />}
      arrowOpen={<UpArrowIcon />}
      onChange={({ value }) => loadAudio(value)}
    />
  );
};
