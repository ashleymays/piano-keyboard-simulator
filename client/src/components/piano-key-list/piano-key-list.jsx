/* eslint jsx-a11y/no-static-element-interactions: 0 */
import { useContext } from 'react';
import { MainContext } from '~/context';
import { PianoKey } from '~/components/piano-key';
import { pianoKeys } from '~/data';

const pianoKeyComponents = (() => {
  const components = [];
  pianoKeys.forEach((pianoKey) =>
    components.push(
      <PianoKey
        key={pianoKey.computerKey}
        {...pianoKey}
      />
    )
  );
  return components;
})();

export function PianoKeyList() {
  const { buffers } = useContext(MainContext);
  console.log(buffers.current);
  return <div className="piano-key-list">{pianoKeyComponents}</div>;
}
