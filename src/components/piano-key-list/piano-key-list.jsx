import { PianoKey } from '~/components/piano-key';
import { pianoKeys } from '~/data';

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

export function PianoKeyList() {
  return <div className="piano-key-list">{pianoKeyComponents}</div>;
}
