import type { Request, Response, NextFunction } from 'express';

export const addDispatch = (req: Request, res: Response, next: NextFunction) => {
  res.dispatch = (statusCode: number, data: unknown) => {
    res.status(statusCode).json({ data });
  };
};
