export function handleOctaveUp(pianoKeys) {
  if (canRaiseOctave(pianoKeys)) {
    const INCREMENT_VALUE = 1;
    updateOctaves(pianoKeys, INCREMENT_VALUE);
  }
}

export function handleOctaveDown(pianoKeys) {
  if (canLowerOctave(pianoKeys)) {
    const INCREMENT_VALUE = -1;
    updateOctaves(pianoKeys, INCREMENT_VALUE);
  }
}

function canRaiseOctave(pianoKeys) {
  const HIGHEST_OCTAVE = 7;
  const highestPianoKey = pianoKeys.get('.');
  return highestPianoKey.octave < HIGHEST_OCTAVE;
}

function canLowerOctave(pianoKeys) {
  const LOWEST_OCTAVE = 1;
  const lowestPianoKey = pianoKeys.get('q');
  return lowestPianoKey.octave > LOWEST_OCTAVE;
}

function updateOctaves(pianoKeys, INCREMENT_VALUE) {
  pianoKeys.forEach((pianoKey) => {
    pianoKey.octave += INCREMENT_VALUE;
  });
}
