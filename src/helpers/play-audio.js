import { pianoKeys } from '~/data';

export function playAudio(event, currentBuffers) {
  const pitch = getPitchFromEvent(event);
  if (pitch === null) {
    return;
  }
  const buffer = currentBuffers.get(pitch);
  console.log(buffer);
}

function getPitchFromEvent(event) {
  const computerKey = event.key || event.target.value;
  const pianoKey = pianoKeys.get(computerKey);
  if (pianoKey === undefined) {
    return null;
  }
  return `${pianoKey.noteName}${pianoKey.octave}`;
}
