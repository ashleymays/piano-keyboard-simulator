import { catchErrors, GeneralError } from '@ashleymays/nodejs-utils';
import { getAudioFromFilesystem } from './helpers';

export const getAudio = catchErrors(async (req, res) => {
  const { instrument } = req.query as { instrument: string };
  const audioMap = await getAudioFromFilesystem(instrument);

  if (Object.keys(audioMap).length === 0) {
    throw new GeneralError('Could not get audio');
  }

  res.status(200).json(audioMap);
});
