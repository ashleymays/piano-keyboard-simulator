import { useState } from 'react';
import Dropdown from 'react-dropdown';
import { UpArrowIcon, DownArrowIcon } from '~/components/arrow-icon';

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
  const [instrument, setInstrument] = useState(options[0].value);

  return (
    <Dropdown
      options={options}
      value={instrument}
      className="instrument-dropdown"
      controlClassName="instrument-dropdown__selected"
      menuClassName="instrument-dropdown__options"
      arrowClosed={<DownArrowIcon />}
      arrowOpen={<UpArrowIcon />}
    />
  );
};
