import { StatusCodes } from 'http-status-codes';
import { catchErrors } from '@ashleymays/nodejs-utils';
import { findInstrumentNames } from './service.ts';

export const getInstrumentNames = catchErrors(async (req, res) => {
  const instrumentNames = await findInstrumentNames();

  res.sendSuccess(StatusCodes.OK, instrumentNames);
});
