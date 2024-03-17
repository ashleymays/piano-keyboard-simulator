import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir, readFile } from 'node:fs/promises';
import { GeneralError } from '@ashleymays/nodejs-utils';

type AudioSamples = {
  [pitch: string]: string;
};

/**
 * Returns the audio as a map where the
 * pitch maps to the audio file's contents.
 *
 * @async
 * @param {string} instrument
 * @returns {Promise<AudioSamples>}
 */
export const getAudioSamplesForInstrument = async (
  instrument: string
): Promise<AudioSamples> => {
  const instrumentDirPath = getInstrumentDirectoryPath(instrument);
  const fileNames = await getAudioFileNames(instrumentDirPath);
  const files = await getAudioFiles(fileNames, instrumentDirPath);

  if (fileNames.length !== files.length) {
    throw new GeneralError('Could not get all audio samples.');
  }

  return createAudioSamples(fileNames, files);
};

const getInstrumentDirectoryPath = (instrument: string): string => {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  return path.resolve(dirname, '../audio', instrument);
};

const getAudioFileNames = (instrumentDirPath: string): Promise<string[]> => {
  return readdir(instrumentDirPath);
};

const getAudioFiles = (
  fileNames: string[],
  instrumentDirPath: string
): Promise<string[]> => {
  const audioFiles: Promise<string>[] = [];

  fileNames.forEach((fileName) => {
    const audioFilePath = path.resolve(instrumentDirPath, fileName);
    audioFiles.push(getAudioFile(audioFilePath));
  });

  return Promise.all(audioFiles);
};

const getAudioFile = (filePath: string): Promise<string> => {
  return readFile(filePath, 'base64');
};

const createAudioSamples = (
  fileNames: string[],
  files: string[]
): AudioSamples => {
  const audioSamples: AudioSamples = {};

  for (let i = 0; i < files.length; i += 1) {
    const pitch = getPitchFromFileName(fileNames[i]);
    const file = files[i];
    audioSamples[pitch] = `data:application/octet;base64,${file}`;
  }

  return audioSamples;
};

const getPitchFromFileName = (fileName: string): string => {
  const dotIndex = fileName.indexOf('.');
  return fileName.slice(0, dotIndex);
};
