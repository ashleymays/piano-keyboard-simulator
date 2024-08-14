import { StatusCodes } from 'http-status-codes';
import { catchErrors } from '@ashleymays/nodejs-utils';
import { findInstrumentAudio } from './service.ts';

export const getInstrumentAudio = catchErrors(async (req, res) => {
  const audio = await findInstrumentAudio({
    instrumentName: req.params.name
  });

  res.dispatch(StatusCodes.OK, audio);
});
