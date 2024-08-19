import { StatusCodes } from 'http-status-codes';
import { catchErrors } from '@ashleymays/nodejs-utils';
import { findAudioSamples } from './service.ts';

export const getAudioSamples = catchErrors(async (req, res) => {
  const audioSamples = await findAudioSamples(req.params.instrumentName);

  res.sendSuccess(StatusCodes.OK, audioSamples);
});
