import Dropdown from 'react-dropdown';
import { UpArrowIcon, DownArrowIcon } from '~/components/arrow-icon';
import { Spinner } from '~/components/spinner';
import { useInstruments } from './use-instruments';
import { useInstrument } from './use-instrument';

const createDropdownOptions = (instruments: string[]) => {
  return instruments.map((instrument) => ({
    value: instrument,
    label: instrument,
    className: 'instrument-dropdown__option'
  }));
};

export const InstrumentDropdown = () => {
  const instruments = useInstruments();
  const loadAudio = useInstrument();

  return instruments.length === 0 ? (
    <Spinner />
  ) : (
    <Dropdown
      options={createDropdownOptions(instruments)}
      className="instrument-dropdown"
      controlClassName="instrument-dropdown__selected"
      menuClassName="instrument-dropdown__options"
      arrowClosed={<DownArrowIcon />}
      arrowOpen={<UpArrowIcon />}
      onChange={({ value }) => loadAudio(value)}
    />
  );
};
