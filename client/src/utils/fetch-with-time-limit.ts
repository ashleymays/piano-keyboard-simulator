/**
 * Makes a fetch request to the server with a time limit.
 *
 * If the request takes too long, an error is thrown.
 *
 * @param url The URL to fetch
 * @returns The payload in JSON format.
 */
export const fetchWithTimeLimit = async (url: string) => {
  const controller = new AbortController();
  const timer = createApiTimer(controller);

  const response = await fetch(url, { signal: controller.signal });

  endApiTimer(timer);

  const result = await response.json();

  if (result.error) {
    throw new Error(result.error);
  }

  return result.data;
};

const createApiTimer = (controller: AbortController) => {
  const ONE_SECOND_IN_MILLISECONDS = 1000;
  const timeLimit = 8 * ONE_SECOND_IN_MILLISECONDS;

  return setTimeout(
    () => controller.abort('The request took too long to complete.'),
    timeLimit
  );
};

const endApiTimer = (timer: number) => {
  clearTimeout(timer);
};
