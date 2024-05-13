import { keysMap } from '~/keys-map';
import type { IPianoKey } from '~/keys-map';

const computerKeys = Array.from(keysMap.keys());

export const PianoKeys = () => {
  return computerKeys.map((computerKey) => (
    <PianoKey
      key={computerKey}
      computerKey={computerKey}
      type={keysMap.get(computerKey)!.type}
    />
  ));
};

type PianoKeyProps = {
  computerKey: string;
  type: IPianoKey['type'];
};

const PianoKey = ({ computerKey, type }: PianoKeyProps) => {
  return (
    <button
      type="button"
      name="piano-key"
      className={`piano-key--${type === 'natural' ? 'white' : 'black'}`}
      value={computerKey}
    />
  );
};
