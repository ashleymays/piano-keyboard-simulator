import { ToneAudioBuffers } from 'tone';

/**
 * Returns the audio buffers for the instrument notes.
 * @param { string } directory
 * @return { object }
 */
export async function getInstrumentNotes(directory) {
  const urls = getUrlList(directory);
  return await new ToneAudioBuffers(urls);
}

/**
 * Returns the urls to the requested audio files.
 * @param { string } directory
 * @return { object }
 */
function getUrlList(directory) {
  const notes = [
    'A',
    'Ab',
    'B',
    'Bb',
    'C',
    'D',
    'Db',
    'E',
    'Eb',
    'F',
    'G',
    'Gb'
  ];
  const octaves = [1, 2, 3, 4, 5, 6, 7];
  const urls = {};

  let pitch;

  for (const note of notes) {
    for (const octave of octaves) {
      pitch = `${note}${octave}`;
      urls[pitch] = `${import.meta.url}/public/audio/${directory}/${pitch}.mp3`;
    }
  }

  return urls;
}
