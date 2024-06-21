import { ToneAudioBuffers } from 'tone';

type AudioMap = {
  [pitch: string]: string;
};

type ApiResponse = { data: AudioMap } & { error: string };

export const getAudioSamples = async (instrument: string) => {
  const response = await fetchAudioSamples(instrument);

  if (response.error) {
    throw new Error(response.error);
  }

  return getToneAudioBuffers(response.data);
};

const fetchAudioSamples = async (instrument: string): Promise<ApiResponse> => {
  const controller = new AbortController();
  const url = `${import.meta.env.VITE_INSTRUMENT_API_URL}/instruments/${instrument}/audio`;

  const timeoutDuration = 5 * 1000;
  const id = setTimeout(() => controller.abort(), timeoutDuration);

  const response = await fetch(url, { signal: controller.signal });

  clearTimeout(id);

  return response.json();
};

const getToneAudioBuffers = (urls: AudioMap): Promise<ToneAudioBuffers> => {
  return new Promise((resolve, reject) => {
    const buffers = new ToneAudioBuffers({
      urls,
      onload: () => resolve(buffers),
      onerror: (error) => reject(error)
    });
  });
};
