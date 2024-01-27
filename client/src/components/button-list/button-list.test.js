/* eslint no-undef: 0 */
import { getAudioBuffers } from './button-list.helpers';

describe('getAudioBuffers', () => {
  it('should return null for an instrument directory that is not in the audio directory', async () => {
    const buffers = getAudioBuffers('akdjfnal');
    await expect(buffers).toBe(null);
  });

  it('should return null for no instrument directory', async () => {
    const buffers = getAudioBuffers();
    await expect(buffers).toBe(null);
  });
});
