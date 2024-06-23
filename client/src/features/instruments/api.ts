export const getInstruments = async () => {
  const response = await fetchInstruments();

  if (response.error) {
    throw new Error(response.error);
  }

  return response.data;
};

const fetchInstruments = async () => {
  const response = await fetch(`http://localhost:8080/api/v2/instruments`);

  return response.json();
};
