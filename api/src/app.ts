import express from 'express';
import { routes } from './routes.ts';
import { globalErrorHandler } from './middleware/global-error-handler.ts';
import { invalidRouteHandler } from './middleware/invalid-route-handler.ts';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(globalErrorHandler);
app.use(invalidRouteHandler);
