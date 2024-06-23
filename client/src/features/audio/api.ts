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
  const response = await fetch(
    `http://localhost:8080/api/v2/instruments/${instrument}/audio`
  );

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
