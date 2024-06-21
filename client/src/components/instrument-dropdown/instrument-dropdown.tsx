import Dropdown from 'react-dropdown';
import { useSelector } from 'react-redux';
import { UpArrowIcon, DownArrowIcon } from '~/components/arrow-icon';
import { useInstrumentAudio } from './use-instrument-audio';
import { useInstrumentNames } from './use-instrument-names';

const createDropdownOptions = (instruments: string[]) => {
  return instruments.map((instrument) => ({
    value: instrument,
    label: instrument,
    className: 'instrument-dropdown__option'
  }));
};

export const InstrumentDropdown = () => {
  const [instruments] = useInstrumentNames();
  const [instrument, loadAudio] = useInstrumentAudio();

  return (
    <Dropdown
      options={createDropdownOptions(instruments)}
      value={instrument}
      className="instrument-dropdown"
      controlClassName="instrument-dropdown__selected"
      menuClassName="instrument-dropdown__options"
      arrowClosed={<DownArrowIcon />}
      arrowOpen={<UpArrowIcon />}
      onChange={({ value }) => loadAudio(value)}
    />
  );
};
