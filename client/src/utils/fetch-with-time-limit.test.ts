import { describe, it, expect } from 'vitest';
import { fetchWithTimeLimit } from './fetch-with-time-limit';

describe('fetch-with-time-limit', () => {
  it('should throw an error for an invalid route', async () => {
    await expect(() =>
      fetchWithTimeLimit(
        `${import.meta.env.VITE_INSTRUMENT_API_URL}/instrument`
      )
    ).rejects.toThrowError();
  });

  it('should throw an error for an invalid request parameter', async () => {
    await expect(() =>
      fetchWithTimeLimit(
        `${import.meta.env.VITE_INSTRUMENT_API_URL}/instruments/undefined/audio`
      )
    ).rejects.toThrowError();
  });
});
