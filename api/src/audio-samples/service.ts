import fetch from 'node-fetch';
import { Buffer } from 'node:buffer';
import { fetchInstrumentData } from '~/octokit/fetch-instrument-data.ts';
import type { components } from '@octokit/openapi-types';

type AudioSamples = Record<string, string>;
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
export const findAudioSamples = async (instrumentName: string) => {
  const files = await fetchInstrumentAudio(instrumentName);

  if (!Array.isArray(files)) {
    throw new Error(`Could not get all audio files`);
  }

  return getAudioSamplesInBase64(files);
};

const fetchInstrumentAudio = async (instrumentName: string) => {
  const response = await fetchInstrumentData(`/instruments/${instrumentName}`);

  return response.data;
};

const getAudioSamplesInBase64 = async (files: DirectoryFile[]) => {
  const audioFileUrls = getAudioFileUrls(files);

  if (!areAllAudioFilesPresent(audioFileUrls)) {
    throw new Error('Could not get all audio files.');
  }

  const pitches = getPitchesFromFileNames(files);
  const audioFilesInBase64 = await convertAudioToBase64Files(audioFileUrls);

  return mapPitchesToAudioFiles(pitches, audioFilesInBase64);
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

  const pitch = fileName.slice(0, dotIndex);

  if (!isValidPitch(pitch)) {
    throw new Error(`${pitch} is not a valid pitch.`);
  }

  return pitch;
};

// prettier-ignore
const validNotes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const validOctaves = [1, 2, 3, 4, 5, 6, 7];

const isValidPitch = (pitch: string) => {
  return validNotes.some((note) =>
    validOctaves.some((octave) => `${note}${octave}` === pitch)
  );
};

const areAllAudioFilesPresent = (files: string[]) => {
  const notesCount = validNotes.length;
  const octavesCount = validOctaves.length;

  const pitchesCount = notesCount * octavesCount;

  return files.length === pitchesCount;
};

/**
 * Downloads the audio for an instrument and converts it to
 * transferable base64 urls.
 *
 * @param urls
 * @returns The audio for the instrument in base 64 format
 */
const convertAudioToBase64Files = async (urls: string[]) => {
  const pendingAudio = urls.map((url) => fetch(url));
  const audio = await Promise.all(pendingAudio);

  const pendingArrayBuffers = audio.map((file) => file.arrayBuffer());
  const arrayBuffers = await Promise.all(pendingArrayBuffers);

  const base64Audio = arrayBuffers.map((arrayBuffer) =>
    Buffer.from(arrayBuffer).toString('base64')
  );

  return base64Audio.map((file) => `data:application/octet;base64,${file}`);
};

const mapPitchesToAudioFiles = (pitches: string[], audioFiles: string[]) => {
  const audioSamples: AudioSamples = {};

  for (let i = 0; i < pitches.length; ++i) {
    const pitch = pitches[i];
    const audioFile = audioFiles[i];

    audioSamples[pitch] = audioFile;
  }

  return audioSamples;
};
