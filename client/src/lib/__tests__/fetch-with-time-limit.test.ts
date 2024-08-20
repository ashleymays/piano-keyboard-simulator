import { describe, it, expect } from 'vitest';
import { fetchData } from '../fetch-data';

describe('fetch-with-time-limit', () => {
  it('should throw an error for an invalid route', async () => {
    await expect(() =>
      fetchData(`${import.meta.env.VITE_INSTRUMENT_API_URL}/instrument`)
    ).rejects.toThrowError();
  });

  it('should throw an error for an invalid request parameter', async () => {
    await expect(() =>
      fetchData(
        `${import.meta.env.VITE_INSTRUMENT_API_URL}/instruments/undefined/audio`
      )
    ).rejects.toThrowError();
  });
});
