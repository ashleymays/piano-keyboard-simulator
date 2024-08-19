import { StatusCodes } from 'http-status-codes';
import type { Request, Response } from 'express';

export const invalidRouteHandler = (req: Request, res: Response) => {
  res.sendError(StatusCodes.BAD_REQUEST, 'Invalid route requested');
};
