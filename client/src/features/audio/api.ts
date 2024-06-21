import { ToneAudioBuffers } from 'tone';

type AudioMap = {
  [pitch: string]: string;
}

type ApiResponse = { data: AudioMap } & { error: string };

export const getAudioSamples = async (instrument: string) => {
  const response = await fetchAudioSamples(instrument);

  if (response.error) {
    throw new Error(response.error);
  }

  console.log(response.data);
  const loaded = await getToneAudioBuffers(response.data);
  console.log(loaded);

  return response.data;
};

const fetchAudioSamples = async (instrument: string): Promise<ApiResponse> => {
  const response = await fetch(
    `${import.meta.env.VITE_INSTRUMENT_API_URL}/instruments/${instrument}/audio`
  );

  return response.json();
};

const getToneAudioBuffers = (urls: AudioMap): Promise<ToneAudioBuffers> => {
  return new Promise((resolve, reject) => {
    const buffers = new ToneAudioBuffers({
      urls,
      onload: () => resolve(buffers),
      onerror: (error) => reject(error) 
    })
  })
}