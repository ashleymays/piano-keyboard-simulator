import { StatusCodes } from 'http-status-codes';
import { RequestError } from 'octokit';
import type { Request, Response, NextFunction } from 'express';
import type { CustomError } from '@ashleymays/nodejs-utils';

export const globalErrorHandler = (
  err: CustomError & RequestError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = isOctokitError(err) ? parseOctokitError(err) : err;

  res
    .status(err.status || err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
    .json(error);
};

const isOctokitError = (err: CustomError & RequestError) => {
  return err instanceof RequestError;
};

const parseOctokitError = (err: RequestError) => {
  if (err.status === StatusCodes.NOT_FOUND) {
    return { message: 'The requested resource was not found. ' };
  }
  return { message: err.message };
};
