import { handleOctaveUp, handleOctaveDown } from 'src/lib/octaveControls';

it('should increment the octaves by 1', () => {
  const pianoKeys = new Map([
    ['y', { octave: 5 }],
    ['.', { octave: 6 }]
  ]);
  handleOctaveUp(pianoKeys);
  expect(pianoKeys.get('y').octave).toBe(6);
  expect(pianoKeys.get('.').octave).toBe(7);
});

it('should decrement the octaves by 1', () => {
  const pianoKeys = new Map([
    ['q', { octave: 2 }],
    ['2', { octave: 3 }]
  ]);
  handleOctaveDown(pianoKeys);
  expect(pianoKeys.get('q').octave).toBe(1);
  expect(pianoKeys.get('2').octave).toBe(2);
});

it('should not increment the octaves', () => {
  const pianoKeys = new Map([
    ['y', { octave: 6 }],
    ['.', { octave: 7 }]
  ]);
  handleOctaveUp(pianoKeys);
  expect(pianoKeys.get('y').octave).toBe(6);
  expect(pianoKeys.get('.').octave).toBe(7);
});

it('should not decrement the octaves', () => {
  const pianoKeys = new Map([
    ['q', { octave: 1 }],
    ['2', { octave: 2 }]
  ]);
  handleOctaveDown(pianoKeys);
  expect(pianoKeys.get('q').octave).toBe(1);
  expect(pianoKeys.get('2').octave).toBe(2);
});
