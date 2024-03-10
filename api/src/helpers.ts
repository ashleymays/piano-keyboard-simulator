import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir, readFile } from 'node:fs/promises';
import type { AudioMap } from './types/audio-map';

/**
 * Returns the audio as a map where the
 * pitch maps to the audio file's contents.
 *
 * @async
 * @param {string} instrument
 * @returns {Promise<AudioMap>}
 */
export async function getAudioFromFilesystem(
  instrument: string
): Promise<AudioMap> {
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
function getInstrumentDirectory(instrument: string): string {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  return path.resolve(dirname, './audio', instrument);
}

/**
 * Get the names of the audio files from the filesystem.
 * Used to read the audio data for each file.
 *
 * @param {string} directoryPath
 * @returns {Promise<string[]>}
 */
function getAudioFileNames(directoryPath: string): Promise<string[]> {
  return readdir(directoryPath);
}

/**
 * @param {string[]} fileNames
 * @param {string} directoryPath
 * @returns {Promise<string[]>}
 */
function getAudioFiles(
  fileNames: string[],
  directoryPath: string
): Promise<string[]> {
  const audioFiles: Promise<string>[] = [];

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
function getAudioFile(filePath: string): Promise<string> {
  return readFile(filePath, 'base64');
}

/**
 * @param {string} fileName
 * @returns {string}
 */
function getPitchFromFileName(fileName: string): string {
  const dotIndex = fileName.indexOf('.');
  return fileName.slice(0, dotIndex);
}

/**
 * @param {string[]} fileNames
 * @returns {string[]}
 */
function getPitchesFromFileNames(fileNames: string[]): string[] {
  const pitches: string[] = [];

  fileNames.forEach((fileName) => {
    pitches.push(getPitchFromFileName(fileName));
  });

  return pitches;
}

/**
 * @param {string[]} audioFiles
 * @param {string[]} pitches
 * @returns {AudioMap}
 */
function mapAudioFileToPitch(
  audioFiles: string[],
  pitches: string[]
): AudioMap {
  if (audioFiles.length !== pitches.length) {
    return {};
  }

  const map: AudioMap = {};

  for (let i = 0; i < audioFiles.length; i += 1) {
    const pitch = pitches[i];
    const fileSnippet = audioFiles[i];
    map[pitch] = `data:application/octet;base64,${fileSnippet}`;
  }

  return map;
}
