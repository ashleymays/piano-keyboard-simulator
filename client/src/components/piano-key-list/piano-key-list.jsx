/* eslint jsx-a11y/no-static-element-interactions: 0 */
import { useContext } from 'react';
import { AudioContext } from '~/context';
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
  const { audioBuffers } = useContext(AudioContext);
  console.log(audioBuffers);
  return <div className="piano-key-list">{pianoKeyComponents}</div>;
}
