import { Players } from 'tone';
import { fetchWithTimeLimit } from '~/lib/fetch-with-time-limit';

type AudioSamples = Record<string, string>;

export const getAudioPlayers = async (instrument: string) => {
  const audioSamples = await fetchAudioSamples(instrument);

  return createAudioPlayers(audioSamples);
};

const fetchAudioSamples = (instrument: string): Promise<AudioSamples> => {
  return fetchWithTimeLimit(`/api/v2/instruments/${instrument}/audio`);
};

const createAudioPlayers = (urls: AudioSamples): Promise<Players> => {
  return new Promise((resolve, reject) => {
    const players = new Players({
      urls,
      onload: () => resolve(players),
      onerror: (error) => reject(error)
    });
  });
};
