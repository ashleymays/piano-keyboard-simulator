/*
    FILE: keysMap.js
    PURPOSE: List all the pitches the keyboard deals with, which is 85 keys: the full set of 88 keys minus
            the three lowest pitches (A0, Bb0, and B0) because the keyboard UI can only display a range starting
            at a C note.
            
            It correlates computer keyboard input with a note name and octave so that Piano.js can
            quickly find what note the user's playing. Also, it separates note name from octave so that the octave
            can be easily changed to allow users to play all 85 keys.

            To get the pitch, we concatenate the note name and octave, in that order.
*/

const keysMap = new Map ([
    ['q', { noteName: "C", octave: 3 }],
    ['2', { noteName: "Db", octave: 3 }],
    ['w', { noteName: "D", octave: 3 }],
    ['3', { noteName: "Eb", octave: 3 }],
    ['e', { noteName: "E", octave: 3 }],
    ['r', { noteName: "F", octave: 3 }],
    ['5', { noteName: "Gb", octave: 3 }],
    ['t', { noteName: "G", octave: 3 }],
    ['6', { noteName: "Ab", octave: 3 }],
    ['y', { noteName: "A", octave: 3 }],
    ['7', { noteName: "Bb", octave: 3 }],
    ['u', { noteName: "B", octave: 3 }],
    ['i', { noteName: "C", octave: 4 }],
    ['9', { noteName: "Db", octave: 4 }],
    ['o', { noteName: "D", octave: 4 }],
    ['0', { noteName: "Eb", octave: 4 }],
    ['p', { noteName: "E", octave: 4 }],
    ['[', { noteName: "F", octave: 4 }],
    ['=', { noteName: "Gb", octave: 4 }],
    [']', { noteName: "G", octave: 4 }],
    ['a', { noteName: "Ab", octave: 4 }],
    ['z', { noteName: "A", octave: 4 }],
    ['s', { noteName: "Bb", octave: 4 }],
    ['x', { noteName: "B", octave: 4 }],
    ['c', { noteName: "C", octave: 5 }],
    ['f', { noteName: "Db", octave: 5 }],
    ['v', { noteName: "D", octave: 5 }],
    ['g', { noteName: "Eb", octave: 5 }],
    ['b', { noteName: "E", octave: 5 }],
    ['n', { noteName: "F", octave: 5 }],
    ['j', { noteName: "Gb", octave: 5 }],
    ['m', { noteName: "G", octave: 5 }],
    ['k', { noteName: "Ab", octave: 5 }],
    [',', { noteName: "A", octave: 5 }],
    ['l', { noteName: "Bb", octave: 5 }],
    ['.', { noteName: "B", octave: 5 }],
    ['/', { noteName: "C", octave: 6 }],
]);

export default keysMap;