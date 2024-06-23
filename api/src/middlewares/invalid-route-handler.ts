import { StatusCodes } from 'http-status-codes';
import { InvalidInputError } from '@ashleymays/nodejs-utils';
import type { Request, Response } from 'express';

export const invalidRouteHandler = (req: Request, res: Response) => {
  const error = new InvalidInputError('Invalid route requested');

  res.status(StatusCodes.BAD_REQUEST).json({ error });
};
