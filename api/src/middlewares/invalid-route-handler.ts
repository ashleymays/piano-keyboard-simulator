import { StatusCodes } from 'http-status-codes';
import type { Request, Response } from 'express';

export const invalidRouteHandler = (req: Request, res: Response) => {
  res
    .status(StatusCodes.BAD_REQUEST)
    .json({ error: 'Invalid route requested' });
};
