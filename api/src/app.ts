import express from 'express';
import cors from 'cors';

import { routes } from './routes.ts';

import {
  addSendSuccess,
  addSendError,
  rateLimiter,
  globalErrorHandler,
  invalidRouteHandler
} from './middleware/index.ts';

export const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(addSendSuccess);
app.use(addSendError);

if (process.env.NODE_ENV === 'production') {
  app.use(rateLimiter);
}

app.use(routes);

app.use(globalErrorHandler);
app.use(invalidRouteHandler);
