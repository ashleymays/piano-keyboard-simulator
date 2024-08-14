import { rateLimit, type Options } from 'express-rate-limit';
import { StatusCodes } from 'http-status-codes';

const handler: Options['handler'] = (req, res, next, options) => {
  res.status(StatusCodes.TOO_MANY_REQUESTS).json({ data: options.message });
};

const options: Partial<Options> = {
  windowMs: 10 * 60 * 1000,
  limit: 30,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  handler
};

if (process.env.NODE_ENV === 'development') {
  options.validate = { ip: false };
}

export const rateLimiter = rateLimit(options);
