/* eslint require-jsdoc: 0 */
import { ToneAudioBuffers } from 'tone';

const getAudioFilePaths = (directory) => {
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

const getToneConstructorAsPromise = (ToneConstructor, options) => {
  return new Promise((resolve, reject) => {
    const results = new ToneConstructor(options, (error) =>
      error ? reject(error) : resolve(results)
    );
  });
};

export const getAudioBuffers = (directory) => {
  const filePaths = getAudioFilePaths(directory);
  return getToneConstructorAsPromise(ToneAudioBuffers, filePaths);
};
