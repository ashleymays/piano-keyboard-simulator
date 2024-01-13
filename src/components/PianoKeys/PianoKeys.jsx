import { PianoKey } from '~/components/PianoKey';
import { pianoKeys } from '~/constants';

const pianoKeyComponents = (() => {
  const components = [];
  pianoKeys.forEach((pianoKey, computerKey) =>
    components.push(
      <PianoKey
        key={computerKey}
        {...pianoKey}
      />
    )
  );
  return components;
})();

export function PianoKeys() {
  return <div className="piano-keys">{pianoKeyComponents}</div>;
}
