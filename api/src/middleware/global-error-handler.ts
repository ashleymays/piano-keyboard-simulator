import { StatusCodes } from 'http-status-codes';
import { RequestError } from '@octokit/request-error';

import type { Request, Response, NextFunction } from 'express';
import type { CustomError } from '@ashleymays/nodejs-utils';

export const globalErrorHandler = (
  err: CustomError | RequestError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = getErrorMessage(err);
  const statusCode =
    err.status || err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

  res.sendError(statusCode, message);
};

const getErrorMessage = (err: CustomError | RequestError) => {
  if (err.status === StatusCodes.NOT_FOUND) {
    return 'The requested resource was not found.';
  }
  return err.message;
};
