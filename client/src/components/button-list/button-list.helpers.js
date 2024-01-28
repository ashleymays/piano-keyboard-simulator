import { ToneAudioBuffers } from 'tone';

/**
 *
 * @async
 * @param { string } directory
 */
export async function getAudio(directory) {
  const response = await getAudioFromServer(directory);

  if (response.error) {
    throw new Error(response.error);
  }

  const audioBuffers = await getToneConstructorAsPromise(
    ToneAudioBuffers,
    response
  );
  console.log(audioBuffers);
}

/**
 *
 * @async
 * @param { string } directory
 * @returns { Promise<object> }
 */
async function getAudioFromServer(directory) {
  const response = await fetch(
    `http://localhost:8080/audio?instrument=${directory}`
  );
  return response.json();
}

/**
 * Wraps a constructor from Tone.js in a awaitable Promise.
 * @param { ToneAudioBuffers } ToneConstructor
 * @param { object } options
 * @returns { Promise<ToneAudioBuffers> }
 */
function getToneConstructorAsPromise(ToneConstructor, options) {
  return new Promise((resolve, reject) => {
    const results = new ToneConstructor(options, (error) =>
      error ? reject(error) : resolve(results)
    );
  });
}
