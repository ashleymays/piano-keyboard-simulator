import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir, readFile } from 'node:fs/promises';

type AudioMap = {
  [pitch: string]: string;
};

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

function getInstrumentDirectory(instrument: string): string {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  return path.resolve(dirname, '../audio', instrument);
}

function getAudioFileNames(directoryPath: string): Promise<string[]> {
  return readdir(directoryPath);
}

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

function getAudioFile(filePath: string): Promise<string> {
  return readFile(filePath, 'base64');
}

function getPitchFromFileName(fileName: string): string {
  const dotIndex = fileName.indexOf('.');
  return fileName.slice(0, dotIndex);
}

function getPitchesFromFileNames(fileNames: string[]): string[] {
  const pitches: string[] = [];

  fileNames.forEach((fileName) => {
    pitches.push(getPitchFromFileName(fileName));
  });

  return pitches;
}

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
