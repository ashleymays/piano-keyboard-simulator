import { getAudioFromFilesystem } from './get-audio.helpers.js';

export const getAudio = async (req, res) => {
  try {
    const { instrument } = req.query;
    const audioMap = await getAudioFromFilesystem(instrument);

    if (Object.keys(audioMap).length === 0) {
      throw new Error('Could not get audio');
    }

    res.status(200).json(audioMap);
  } catch (error) {
    res.status(error.statusCode || 500).json(error);
  }
};
