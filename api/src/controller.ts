import { catchErrors, GeneralError } from '@ashleymays/nodejs-utils';
import { getAudioFromFilesystem } from './helpers';
import type { AudioMap } from './types/audio-map';

export const getAudio = catchErrors(async (req, res) => {
  const { instrument } = req.query as { instrument: string };
  const audioMap: AudioMap = await getAudioFromFilesystem(instrument);

  if (Object.keys(audioMap).length === 0) {
    throw new GeneralError('Could not get audio');
  }

  res.status(200).json(audioMap);
});
