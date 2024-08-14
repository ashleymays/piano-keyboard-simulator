import { StatusCodes } from 'http-status-codes';
import { RequestError } from '@octokit/request-error';
import { NotFoundError, GeneralError } from '@ashleymays/nodejs-utils';
import type { Request, Response, NextFunction } from 'express';
import type { CustomError } from '@ashleymays/nodejs-utils';

export const globalErrorHandler = (
  err: CustomError | RequestError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = isOctokitError(err) ? parseOctokitError(err) : err;

  res
    .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ error: error.message });
};

const isOctokitError = (
  err: CustomError | RequestError
): err is RequestError => {
  return err instanceof RequestError;
};

const parseOctokitError = (err: RequestError) => {
  if (err.status === StatusCodes.NOT_FOUND) {
    return new NotFoundError('The requested resource was not found. ');
  }
  return new GeneralError(err.message);
};
