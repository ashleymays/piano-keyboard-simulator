import { rateLimit, type Options } from 'express-rate-limit';
import { StatusCodes } from 'http-status-codes';

const oneMinuteInMilliseconds = 60 * 1000;

const options: Partial<Options> = {
  windowMs: 10 * oneMinuteInMilliseconds,
  limit: 30,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  handler: (req, res, next, options) => {
    res.sendError(StatusCodes.TOO_MANY_REQUESTS, options.message);
  }
};

export const rateLimiter = rateLimit(options);
