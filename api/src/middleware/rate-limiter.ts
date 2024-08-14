import { rateLimit, type Options } from 'express-rate-limit';

const options: Partial<Options> = {
  windowMs: 1 * 60 * 1000, // 15 minutes
  limit: 3,
  standardHeaders: 'draft-7',
  legacyHeaders: false
};

if (process.env.NODE_ENV === 'development') {
  options.validate = { ip: false };
}

export const rateLimiter = rateLimit(options);
