import { StatusCodes } from 'http-status-codes';
import { catchErrors } from '@ashleymays/nodejs-utils';
import { findInstrumentNames } from './service.ts';

export const getInstrumentNames = catchErrors(async (req, res) => {
  const names = await findInstrumentNames();

  res.dispatch(StatusCodes.OK, names);
});
