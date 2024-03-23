import type { Request, Response, NextFunction } from 'express';
import type { CustomError } from '@ashleymays/nodejs-utils';

export const errorHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.statusCode || 500).json({ error: error.message });
};
