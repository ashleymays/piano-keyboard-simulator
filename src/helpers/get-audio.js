import { ToneAudioBuffers } from 'tone';

/**
 * Returns the audio buffers for a specific instrument.
 * @param { string } directory 
 * @returns { Promise<ToneAudioBuffers> }
 */
export function getAudioBuffers(directory) {
  const filePaths = getAudioFilePaths(directory);
  return getToneConstructorAsPromise(ToneAudioBuffers, filePaths);
};

/**
 * Returns the paths to the audio for a specific instrument.
 * @param { string } directory the folder where the instrument's audio is stored
 * @returns { object }
 */
function getAudioFilePaths(directory) {
  // prettier-ignore
  const notes = ['A', 'Ab', 'B', 'Bb', 'C', 'D', 'Db', 'E', 'Eb', 'F', 'G', 'Gb'];
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
};

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
};