import fetch from 'node-fetch';
import { Buffer } from 'node:buffer';
import { storage, repositoryConfig } from '~/octokit/config.ts';
import type { components } from '@octokit/openapi-types';

type AudioMap = Record<string, string>;
type DirectoryFile = components['schemas']['content-directory'][number];

/**
 * Gets the audio for a given instrument.
 *
 * The name provided should be the same as the directory name in the GitHub repository.
 *
 * @throws if the wrong number of files were found,
 * or if the structure of the data is wrong (i.e. invalid names).
 *
 * @returns an object that maps an audio pitch to the corresponding audio file.
 */
export const findInstrumentAudio = async (params: { name: string }) => {
  const files = await fetchInstrumentAudio(params.name);

  if (!Array.isArray(files)) {
    throw new Error(`Could not get all audio files`);
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
  const audioFileLinks = getAudioFileLinks(files);
  const pitches = getPitchesFromFileNames(files);

  if (!hasCorrectFileCount(audioFileLinks) || !hasCorrectFileCount(pitches)) {
    throw new Error('Could not get all audio files.');
  }

  const audioFilesInBase64 = await convertAudioToBase64(audioFileLinks);

  return mapPitchesToAudioFiles(pitches, audioFilesInBase64);
};

const getAudioFileLinks = (files: DirectoryFile[]) => {
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

  const pitch = fileName.slice(0, dotIndex);

  if (!isValidPitch(pitch)) {
    throw new Error(`${pitch} is not a valid pitch.`);
  }

  return pitch;
};

const validNotes = [
  'C',
  'Db',
  'D',
  'Eb',
  'E',
  'F',
  'Gb',
  'G',
  'Ab',
  'A',
  'Bb',
  'B'
];

const validOctaves = [1, 2, 3, 4, 5, 6, 7];

const isValidPitch = (pitch: string) => {
  return validNotes.some((note) =>
    validOctaves.some((octave) => pitch === `${note}${octave}`)
  );
};

const hasCorrectFileCount = (files: string[]) => {
  // We check for 84 files because we don't use the notes `A0`, `Bb0`, `B0`, and `C7`.
  const EXPECTED_NUMBER_OF_AUDIO_FILES = 84;

  return files.length === EXPECTED_NUMBER_OF_AUDIO_FILES;
};

const convertAudioToBase64 = async (audioFileLinks: string[]) => {
  const arrayBuffers = await convertAudioFilesToArrayBuffers(audioFileLinks);
  const base64Files = convertArrayBuffersToBase64(arrayBuffers);

  return convertBase64FilesToBase64Links(base64Files);
};

const convertAudioFilesToArrayBuffers = async (audioFileLinks: string[]) => {
  const pendingAudioFiles = audioFileLinks.map((link) => fetch(link));
  const loadedAudioFiles = await Promise.all(pendingAudioFiles);

  const pendingArrayBuffers = loadedAudioFiles.map((file) =>
    file.arrayBuffer()
  );
  return Promise.all(pendingArrayBuffers);
};

const convertArrayBuffersToBase64 = (arrayBuffers: ArrayBuffer[]) => {
  return arrayBuffers.map((arrayBuffer) =>
    Buffer.from(arrayBuffer).toString('base64')
  );
};

const convertBase64FilesToBase64Links = (base64Files: string[]) => {
  return base64Files.map((file) => `data:application/octet;base64,${file}`);
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
