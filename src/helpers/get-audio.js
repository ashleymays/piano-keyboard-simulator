/* eslint new-cap: 0, no-use-before-define: 0 */
import { ToneAudioBuffers } from 'tone';

/**
 * Get the loaded audio buffers.
 * @param { string } directory
 * @return { Promise<ToneAudioBuffersUrlMap> }
 */
export function getAudioBuffers(directory) {
  const filePaths = getAudioFilePaths(directory);
  return getPromiseForToneConstructor(ToneAudioBuffers, filePaths);
}

/**
 * Wraps an callback-based constructor from Tone.js in a promise.
 * @param { function } constructor the callback-based function to call
 * @param { object } options the options needed for the callback
 * @return { Promise<any> }
 */
function getPromiseForToneConstructor(constructor, options) {
  return new Promise((resolve, reject) => {
    const results = new constructor(options, (error) =>
      error ? reject(error) : resolve(results)
    );
  });
}

/**
 * Returns a list of urls to the audio files
 * at the specified directory.
 * @param { string } directory
 * @return { object }
 */
function getAudioFilePaths(directory) {
  // prettier-ignore
  const notes = [
    'A', 'Ab', 'B', 'Bb', 'C', 'D',
    'Db', 'E', 'Eb', 'F', 'G', 'Gb'
  ];
  const octaves = [1, 2, 3, 4, 5, 6, 7];
  const path = `/audio/${directory}`;
  const filePaths = {};

  let pitch;

  notes.forEach((note) => {
    octaves.forEach((octave) => {
      pitch = `${note}${octave}`;
      filePaths[pitch] = `${path}/${pitch}.mp3`;
    });
  });

  return filePaths;
}
