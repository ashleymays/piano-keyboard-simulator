/**
 * Makes a fetch request to the server with a time limit.
 *
 * If the request takes too long, an error is thrown.
 *
 * @param url - The URL to fetch
 * @returns - The payload in JSON format
 */
export const fetchWithTimeLimit = async (url: string) => {
  const controller = new AbortController();
  const timerId = createFetchTimer(controller);

  const response = await fetch(url, { signal: controller.signal });

  endFetchTimer(timerId);

  return getPayload(response);
};

const getPayload = async (response: Response) => {
  const result = await response.json();

  if (result.error) {
    throw new Error(result.error);
  }

  return result.data;
};

const createFetchTimer = (controller: AbortController) => {
  const oneSecondInMilliseconds = 1000;
  const timeLimit = 60 * oneSecondInMilliseconds;

  return setTimeout(
    () => controller.abort('The request took too long to complete.'),
    timeLimit
  );
};

const endFetchTimer = (timerId: NodeJS.Timeout) => {
  clearTimeout(timerId);
};
