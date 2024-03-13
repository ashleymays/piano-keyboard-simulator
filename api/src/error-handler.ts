import type { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
  code: number;
}

export const errorHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.code || 500).json(error);
};
