export const getAudioSamples = async (instrument: string) => {
  const response = await fetchAudioSamples(instrument);

  if (response.error) {
    throw new Error(response.error);
  }

  return response.data;
};

const fetchAudioSamples = async (instrument: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_INSTRUMENT_API_URL}/instrument/${instrument}/audio`
  );
  return response.json();
};
