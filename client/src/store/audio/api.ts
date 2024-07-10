import { Players } from 'tone';
import { fetchWithTimeLimit } from '~/utils/fetch-with-time-limit';

type AudioSamples = Record<string, string>;

export const getAudio = async (instrument: string) => {
  const audioSamples = await fetchAudioSamples(instrument);

  return getAudioPlayers(audioSamples);
};

const fetchAudioSamples = (instrument: string): Promise<AudioSamples> => {
  return fetchWithTimeLimit(
    `${import.meta.env.VITE_INSTRUMENT_API_URL}/instruments/${instrument}/audio`
  );
};

const getAudioPlayers = (urls: AudioSamples): Promise<Players> => {
  return new Promise((resolve, reject) => {
    const players = new Players({
      urls,
      onload: () => resolve(players),
      onerror: (error) => reject(error)
    });
  });
};
