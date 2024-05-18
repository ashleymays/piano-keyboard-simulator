import { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'acoustic-grand', label: 'Acoustic Grand' },
  { value: 'electric-piano', label: 'Electric Piano' },
  { value: '8-bit', label: '8-Bit' }
];

export const InstrumentDropdown = () => {
  const [instrument, setInstrument] = useState(options[0]);

  console.log(instrument);

  return (
    <Select
      defaultValue={instrument}
      onChange={setInstrument}
      options={options}
      className="instrument-dropdown"
    />
  );
};
