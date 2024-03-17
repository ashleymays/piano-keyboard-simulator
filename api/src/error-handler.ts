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
  const errorCode = isHttpStatusCode(error.code) ? error.code : 500;
  res.status(errorCode).json(error);
};

const isHttpStatusCode = (code: string | number) => {
  return !isNaN(Number(code));
};
