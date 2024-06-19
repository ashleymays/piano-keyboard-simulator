import Dropdown from 'react-dropdown';
import { UpArrowIcon, DownArrowIcon } from '~/components/arrow-icon';
import { useInstruments } from './use-instruments';

// Temporary
const options = [
  {
    value: 'acoustic-grand',
    label: 'Acoustic Grand',
    className: 'instrument-dropdown__option'
  },
  {
    value: 'electric-piano',
    label: 'Electric Piano',
    className: 'instrument-dropdown__option'
  },
  { value: '8-bit', label: '8-Bit', className: 'instrument-dropdown__option' }
];

export const InstrumentDropdown = () => {
  const { instruments } = useInstruments();
  console.log(instruments);

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
