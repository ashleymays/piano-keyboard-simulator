import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir, readFile } from 'node:fs/promises';

/**
 * Returns the audio as a map where the 
 * pitch maps to the audio file's contents.
 * @async
 * @param { string } instrument 
 * @returns { object }
 */
export async function getAudioFromFilesystem(instrument) {
  const directoryPath = getDirectory(instrument);
  const fileNames = await getAudioFileNames(directoryPath);
  const audioFiles = await getAudioFiles(fileNames, directoryPath);
  const pitches = getPitchesFromFileNames(fileNames);
  return mapAudioFileToPitch(audioFiles, pitches);
}

/**
 * Returns the directory to the audio files
 * for the given instrument.
 * @param { string } instrument
 * @returns { string }
 */
function getDirectory(instrument) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.resolve(__dirname, './audio', instrument);
}

/**
 * Returns the names of the audio files.
 * @param { string } directoryPath 
 * @returns { Promise<Array<string>> }
 */
function getAudioFileNames(directoryPath) {
  return readdir(directoryPath);
}

/**
 * Returns the audio files.
 * @param { Array<string> } fileNames 
 * @param { string } directoryPath 
 * @returns { Promise<Array<string>>}
 */
function getAudioFiles(fileNames, directoryPath) {
  const audioFiles = [];

  for (const fileName of fileNames) {
    const audioFilePath = path.resolve(directoryPath, fileName);
    audioFiles.push(getAudioFile(audioFilePath));    
  }

  return Promise.all(audioFiles);
}

/**
 * Returns the audio file for the given file path.
 * @param { string } filePath 
 * @returns { Promise<string> }
 */
function getAudioFile(filePath) {
  return readFile(filePath, 'base64');
}

/**
 * Returns the audio pitch given by the file name.
 * @param { string } fileName 
 * @returns { string }
 */
function getPitchFromFileName(fileName) {
  const dotIndex = fileName.indexOf('.');
  return fileName.slice(0, dotIndex);
}

/**
 * Returns the audio pitches from the file names.
 * @param { Array<string> } fileNames 
 * @returns { Array<string> }
 */
function getPitchesFromFileNames(fileNames) {
  const pitches = [];

  for (const fileName of fileNames) {
    pitches.push(getPitchFromFileName(fileName));
  }

  return pitches;
}

/**
 * Returns an object mapping the audio pitches to the audio files.
 * @param { Array<string> } audioFiles 
 * @param { Array<string> } pitches 
 * @returns { object? }
 */
function mapAudioFileToPitch(audioFiles, pitches) {
  if (audioFiles.length !== pitches.length) {
    return null;
  }
  const map = {};

  for (let i = 0; i < audioFiles.length; ++i) {
    map[pitches[i]] = `data:application/octet;base64,${audioFiles[i]}`;
  }

  return map;
}
