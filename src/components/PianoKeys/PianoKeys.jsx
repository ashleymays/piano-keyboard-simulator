import { PianoKey } from '~/components/PianoKey';
import { pianoKeys } from '~/constants';

export function PianoKeys() {
  const getPianoKeysAsArray = () => {
    const components = [];
    pianoKeys.forEach((pianoKey, computerKey) =>
      components.push(<PianoKey key={computerKey} {...pianoKey} />)
    );
    return components;
  };

  return <div className="piano-keys">{getPianoKeysAsArray()}</div>;
}
