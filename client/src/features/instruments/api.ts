export const getInstruments = async () => {
  const response = await fetchInstruments();

  if (response.error) {
    throw new Error(response.error);
  }

  return response.data;
};

const fetchInstruments = async () => {
  const controller = new AbortController();
  const url = `${import.meta.env.VITE_INSTRUMENT_API_URL}/instruments`;

  const timeoutDuration = 5 * 1000;
  const id = setTimeout(() => controller.abort(), timeoutDuration);

  const response = await fetch(url, { signal: controller.signal });

  clearTimeout(id);

  return response.json();
};
