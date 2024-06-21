import fetch from 'node-fetch';
import { Buffer } from 'node:buffer';
import { storage, repositoryConfig } from '~/octokit/config.ts';
import type { components } from '@octokit/openapi-types';

type AudioMap = {
  [pitch: string]: string;
};

type DirectoryFile = components['schemas']['content-directory'][number];

/**
 * Gets the audio for each note for a given instrument.
 *
 * The name provided should be the same as the directory name in the GitHub repository.
 *
 * @throws if the wrong number of files were found,
 * or if the structure of the data is wrong (i.e. invalid names).
 *
 * @returns an object mapping a note to a link to download the sound for that note.
 */
export const findInstrumentAudio = async (params: { name: string }) => {
  const files = await fetchInstrumentAudio(params.name);

  if (!Array.isArray(files)) {
    throw new Error(
      `Could not find audio files for instrument: ${params.name}`
    );
  }

  return createAudioMap(files);
};

const fetchInstrumentAudio = async (name: string) => {
  const response = await storage.getContent({
    path: `/audio/${name}`,
    ...repositoryConfig
  });

  return response.data;
};

const createAudioMap = async (files: DirectoryFile[]) => {
  const audioFileUrls = getAudioFileUrls(files);
  const pitches = getPitchesFromFileNames(files);

  validateNumberOfAudioFiles(audioFileUrls, pitches);

  const audioFilesAsBase64 = await convertAudioFilesToBase64(audioFileUrls);
  console.log(audioFileUrls[0]);

  return mapPitchesToAudioFiles(pitches, audioFilesAsBase64);
};

const getAudioFileUrls = (files: DirectoryFile[]) => {
  return files.map((file) => file.download_url).filter(Boolean);
};

const getPitchesFromFileNames = (files: DirectoryFile[]) => {
  return files.map((file) => getPitchFromFileName(file.name));
};

const getPitchFromFileName = (fileName: string) => {
  const dotIndex = fileName.indexOf('.');

  if (dotIndex === -1) {
    throw new Error('Audio file name is missing an extension.');
  }

  return fileName.slice(0, dotIndex);
};

/**
 * Checks if the correct number of audio files and pitches were fetched from storage.
 *
 * We check for 84 files because we don't use the notes `A0`, `Bb0`, `B0`, and `C7`.
 * These aren't used in the app, so at the moment, there's no reason to keep them.
 */
const validateNumberOfAudioFiles = (
  audioFileUrls: string[],
  pitches: string[]
) => {
  const EXPECTED_NUMBER_OF_AUDIO_FILES = 84;

  if (
    audioFileUrls.length !== EXPECTED_NUMBER_OF_AUDIO_FILES ||
    pitches.length !== EXPECTED_NUMBER_OF_AUDIO_FILES
  ) {
    throw new Error('Could not get all audio files.');
  }
};

const convertAudioFilesToBase64 = async (audioFileUrls: string[]) => {
  const audioFiles = audioFileUrls.map((url) => fetch(url));
  const loadedAudioFiles = await Promise.all(audioFiles);

  const arrayBuffers = loadedAudioFiles.map((file) => file.arrayBuffer());
  const loadedArrayBuffers = await Promise.all(arrayBuffers);

  return loadedArrayBuffers.map((arrayBuffer) =>
    Buffer.from(arrayBuffer).toString('base64')
  );
};

const mapPitchesToAudioFiles = (pitches: string[], audioFiles: string[]) => {
  const audioMap: AudioMap = {};

  for (let i = 0; i < pitches.length; ++i) {
    const pitch = pitches[i];
    const audioFile = audioFiles[i];

    audioMap[pitch] = audioFile;
  }

  return audioMap;
};
