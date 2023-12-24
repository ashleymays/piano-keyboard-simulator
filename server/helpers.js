const path = require('path');
const { readdir, readFile } = require('fs');

/**
 * Gets an array of the file names in the instrument's directory
 * @param { string } instrumentDirectoryPath
 * @returns { Promise }
 */
function getAudioFileNames(instrumentDirectoryPath) {
  return new Promise((resolve, reject) =>
    readdir(instrumentDirectoryPath, (error, fileNames) =>
      error != null ? reject(error) : resolve(fileNames)
    )
  );
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
  return new Promise((resolve, reject) =>
    readFile(audioFilePath, 'base64', (error, audio) =>
      error != null ? reject(error) : resolve(audio)
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
