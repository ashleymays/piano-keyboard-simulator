import express from 'express';
import { routes } from './routes.ts';
import { rateLimiter } from './middleware/rate-limiter.ts';
import { globalErrorHandler } from './middleware/global-error-handler.ts';
import { invalidRouteHandler } from './middleware/invalid-route-handler.ts';

export const app = express();

app.enable('trust proxy');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(rateLimiter);
app.use(routes);

app.use(globalErrorHandler);
app.use(invalidRouteHandler);
