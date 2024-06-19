import { useState } from 'react';

type UseInstrumentProps = {
  defaultInstrument: string;
};

export const useInstrument = ({ defaultInstrument }: UseInstrumentProps) => {
  const [instrument, setInstrument] = useState(defaultInstrument);

  const handleInstrument = (newInstrument: string) => {
    setInstrument(newInstrument);
  };

  return { instrument, handleInstrument };
};
