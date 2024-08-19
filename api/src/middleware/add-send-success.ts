import type { Request, Response, NextFunction } from 'express';

/**
 * Adds a function `sendSuccess` to the response object.
 *
 * This allows us to always send a status code and an object
 * with property `data` in JSON format.
 */
export const addSendSuccess = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.sendSuccess = (statusCode: number, data: unknown) => {
    res.status(statusCode).json({ data });
  };

  next();
};
