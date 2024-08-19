import type { Request, Response, NextFunction } from 'express';

/**
 * Adds a function `sendError` to the response object.
 *
 * This allows us to always send a status code and an object
 * with property `error` in JSON format.
 */
export const addSendError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.sendError = (statusCode: number, error: string) => {
    res.status(statusCode).json({ error });
  };

  next();
};
