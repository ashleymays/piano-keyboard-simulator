import { StatusCodes } from 'http-status-codes';
import { catchErrors } from '@ashleymays/nodejs-utils';
import * as services from './services/index.ts';

export const getInstrumentNames = catchErrors(async (req, res) => {
  const names = await services.getInstrumentNames();

  res.status(StatusCodes.OK).json({ data: names });
});

export const getInstrumentAudio = catchErrors(async (req, res) => {
  const audio = await services.getInstrumentAudio({
    name: req.params.name
  });

  res.status(StatusCodes.OK).json({ data: audio });
});
