import { it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '~/test/utils';
import { OctaveButtons } from '~/components/octave-buttons';
import { PianoKeys } from '~/components/piano-keys';

it('should increment octaves', () => {
  renderWithProviders(<OctaveButtons />);
  renderWithProviders(<PianoKeys />);

  const upButton = screen.getByLabelText('Raise Octave');

  expect(upButton).toBeDefined();
  expect(screen.findByText('C3')).toBeDefined();

  userEvent.click(upButton);

  expect(screen.findByText('C4')).toBeDefined();
});

it('should decrement octaves', () => {
  renderWithProviders(<OctaveButtons />);
  renderWithProviders(<PianoKeys />);

  const downButton = screen.getByLabelText('Lower Octave');

  expect(downButton).toBeDefined();
  expect(screen.findByText('C3')).toBeDefined();

  userEvent.click(downButton);

  expect(screen.findByText('C2')).toBeDefined();
});
