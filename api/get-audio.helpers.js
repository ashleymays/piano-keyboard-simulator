import path from 'node:path';
import { readdir, readFile } from 'node:fs/promises';
import { getDirname } from './utils.js';

/**
 * Returns the audio as a map where the
 * pitch maps to the audio file's contents.
 *
 * @async
 * @param {string} instrument
 * @returns {Promise<object>}
 */
export async function getAudioFromFilesystem(instrument) {
  const directoryPath = getInstrumentDirectory(instrument);
  const fileNames = await getAudioFileNames(directoryPath);
  const audioFiles = await getAudioFiles(fileNames, directoryPath);
  const pitches = getPitchesFromFileNames(fileNames);
  return mapAudioFileToPitch(audioFiles, pitches);
}

/**
 * Returns the directory path where the instrument's audio is found.
 *
 * @param {string} instrument
 * @returns {string}
 */
function getInstrumentDirectory(instrument) {
  return path.resolve(getDirname(), './audio', instrument);
}

/**
 * Get the names of the audio files from the filesystem.
 * Used to read the audio data for each file.
 *
 * @param {string} directoryPath
 * @returns {Promise<string[]>}
 */
function getAudioFileNames(directoryPath) {
  return readdir(directoryPath);
}

/**
 * @param {string[]} fileNames
 * @param {string} directoryPath
 * @returns {Promise<string[]>}
 */
function getAudioFiles(fileNames, directoryPath) {
  const audioFiles = [];

  fileNames.forEach((fileName) => {
    const audioFilePath = path.resolve(directoryPath, fileName);
    audioFiles.push(getAudioFile(audioFilePath));
  });

  return Promise.all(audioFiles);
}

/**
 * Returns the audio file for the given file path.
 *
 * @param {string} filePath
 * @returns {Promise<string>}
 */
function getAudioFile(filePath) {
  return readFile(filePath, 'base64');
}

/**
 * @param {string} fileName
 * @returns {string}
 */
function getPitchFromFileName(fileName) {
  const dotIndex = fileName.indexOf('.');
  return fileName.slice(0, dotIndex);
}

/**
 * @param {string[]} fileNames
 * @returns {string[]}
 */
function getPitchesFromFileNames(fileNames) {
  const pitches = [];

  fileNames.forEach((fileName) => {
    pitches.push(getPitchFromFileName(fileName));
  });

  return pitches;
}

/**
 * @param {string[]} audioFiles
 * @param {string[]} pitches
 * @returns {object}
 */
function mapAudioFileToPitch(audioFiles, pitches) {
  if (audioFiles.length !== pitches.length) {
    return {};
  }

  const map = {};

  for (let i = 0; i < audioFiles.length; i += 1) {
    map[pitches[i]] = `data:application/octet;base64,${audioFiles[i]}`;
  }

  return map;
}
