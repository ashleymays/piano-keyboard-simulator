import { Players } from 'tone';
import { fetchData } from '~/lib/fetch-data';

type AudioSamples = Record<string, string>;

export const getAudioPlayers = async (instrument: string) => {
  const audioSamples = await fetchAudioSamples(instrument);

  return createAudioPlayers(audioSamples);
};

const fetchAudioSamples = (instrument: string): Promise<AudioSamples> => {
  return fetchData(
    `${import.meta.env.VITE_INSTRUMENT_API_URL}/instruments/${instrument}/audio`
  );
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
