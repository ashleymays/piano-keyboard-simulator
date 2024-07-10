/**
 * Makes a fetch request to the server with a time limit.
 *
 * If the request takes too long, an error is thrown.
 *
 * @param url The URL to fetch
 * @returns The response in JSON format
 */
export const fetchWithTimeLimit = async (url: string) => {
  const controller = new AbortController();
  const timer = createApiTimer(controller);

  const response = await fetch(url, { signal: controller.signal });

  endApiTimer(timer);

  return response.json();
};

const createApiTimer = (controller: AbortController) => {
  const ONE_SECOND_IN_MILLISECONDS = 1000;
  const timeLimit = 5 * ONE_SECOND_IN_MILLISECONDS;

  return setTimeout(
    () =>
      controller.abort(
        'The request took too long to complete. Please check your internet connection and try again.'
      ),
    timeLimit
  );
};

const endApiTimer = (timer: number) => {
  clearTimeout(timer);
};
