export const getInstruments = async () => {
  const response = await fetchInstruments();

  if (response.error) {
    throw new Error(response.error);
  }

  return response.data;
};

const fetchInstruments = async () => {
  const response = await fetch(`${import.meta.env.API_URL}/instruments`);
  return response.json();
};
