import { ToneAudioBuffers } from 'tone';

/**
 *
 * @async
 * @param {string} directory
 * @returns {Promise<ToneAudioBuffers>}
 */
export async function getAudioBuffers(directory) {
  const response = await getAudioFromServer(directory);

  if (response.error) {
    throw new Error(response.error);
  }

  return getToneAudioBuffersPromise(response);
}

/**
 *
 * @async
 * @param {string} directory
 * @returns {Promise<object>}
 */
async function getAudioFromServer(directory) {
  const response = await fetch(
    `http://localhost:8080/audio?instrument=${directory}`
  );
  return response.json();
}

/**
 * Wraps the ToneAudioBuffers constructor from Tone.js in a Promise.
 *
 * @param {ToneAudioBuffers} ToneConstructor
 * @param {object} options
 * @returns {Promise<ToneAudioBuffers>}
 */
function getToneAudioBuffersPromise(options) {
  return new Promise((resolve, reject) => {
    const audioBuffers = new ToneAudioBuffers(options, (error) =>
      error ? reject(error) : resolve(audioBuffers)
    );
  });
}
