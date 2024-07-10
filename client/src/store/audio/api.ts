import { Players } from 'tone';
import { fetchWithTimeLimit } from '~/utils/fetch-with-time-limit';

type AudioMap = {
  [pitch: string]: string;
};

type ApiResponse = { data: AudioMap } & { error: string };

export const getAudio = async (instrument: string) => {
  const response = await fetchAudioSamples(instrument);

  if (response.error) {
    throw new Error(response.error);
  }

  return getAudioPlayers(response.data);
};

const fetchAudioSamples = (instrument: string): Promise<ApiResponse> => {
  return fetchWithTimeLimit(
    `${import.meta.env.VITE_INSTRUMENT_API_URL}/instruments/${instrument}/audio`
  );
};

const getAudioPlayers = (urls: AudioMap): Promise<Players> => {
  return new Promise((resolve, reject) => {
    const players = new Players({
      urls,
      onload: () => resolve(players),
      onerror: (error) => reject(error)
    });
  });
};
