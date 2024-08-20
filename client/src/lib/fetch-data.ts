/**
 * Wrapper for fetch requests.
 *
 * @throws if an error is returned
 * @returns the fetched data
 */
export const fetchData = async (endpoint: string) => {
  const response = await fetch(endpoint);
  const result = await response.json();

  if (result.error) {
    throw new Error(result.error);
  }

  return result.data;
};
