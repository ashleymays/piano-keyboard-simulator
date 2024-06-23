import express from 'express';
import { appRouter } from './routes.ts';
import { globalErrorHandler } from './middlewares/global-error-handler.ts';
import { invalidRouteHandler } from './middlewares/invalid-route-handler.ts';

export const app = express();

export const initApplication = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api/v2', appRouter);

  app.use(globalErrorHandler);
  app.use(invalidRouteHandler);

  const PORT = 8080;

  app.listen(PORT, () => {
    console.log(`Started server on port ${PORT}`);
  });
};
