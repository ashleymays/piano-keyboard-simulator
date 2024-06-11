export type PianoKey = {
  note:
    | 'C'
    | 'Db'
    | 'D'
    | 'Eb'
    | 'E'
    | 'F'
    | 'Gb'
    | 'G'
    | 'Ab'
    | 'A'
    | 'Bb'
    | 'B';
  octave: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  type: 'natural' | 'flat';
};

export type KeysMap = Map<string, PianoKey>;

export type KeysMapState = {
  wrapper: { keysMap: KeysMap };
  raiseOctave: () => void;
  lowerOctave: () => void;
};
