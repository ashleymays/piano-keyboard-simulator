const path = require('path');
const { readdir, readFile } = require('fs');

/**
 * Gets an array of the file names in the instrument's directory
 * @param { string } instrumentDirectoryPath
 * @returns { Promise }
 */
function getAudioFileNames(instrumentDirectoryPath) {
  const params = {
    fn: readdir,
    path: instrumentDirectoryPath
  };
  return getPromiseWrapper(params);
}

function getAudioFiles(fileNames, instrumentDirectoryPath) {
  const audioFiles = [];
  let filePath;
  fileNames.forEach((fileName) => {
    filePath = path.resolve(instrumentDirectoryPath, fileName);
    audioFiles.push(getAudioFile(filePath));
  });
  return Promise.all(audioFiles);
}

/**
 * Gets the audio file data at the specified path.
 * @param { string } audioFilePath
 * @returns { Promise }
 */
function getAudioFile(audioFilePath) {
  const params = {
    fn: readFile,
    path: audioFilePath,
    options: { encoding: 'base64' }
  };
  return getPromiseWrapper(params);
}

/**
 * Wraps an callback-based function in a promise.
 * @param { Object } params the parameters needed to for the callback-based function and the callback itself
 * @param { function } params.fn the callback-based function to call
 * @param { string } params.path
 * @param { Object } params.options the options needed for the callback
 * @returns { Promise }
 */
function getPromiseWrapper({ fn, path, options = {} }) {
  return new Promise((resolve, reject) =>
    fn(path, options, (error, result) =>
      error != null ? reject(error) : resolve(result)
    )
  );
}

/**
 * Combines an array of keys and an array of values into one object.
 * The arrays must have the same length.
 * @param { Array } keys
 * @param { Array } values
 * @returns { Object }
 */
function combineArraysToObject(keys, values) {
  if (keys.length !== values.length) return null;
  const obj = {};
  for (let i = 0; i < keys.length; ++i) {
    obj[keys[i]] = values[i];
  }
  return obj;
}

module.exports = {
  getAudioFileNames,
  getAudioFiles,
  combineArraysToObject
};
