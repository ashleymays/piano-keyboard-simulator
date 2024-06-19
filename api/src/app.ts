import express from 'express';
import { appRouter } from './routes.ts';
import { globalErrorHandler } from './global-error-handler.ts';

export const app = express();

export const initApplication = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api/v2', appRouter);

  app.use(globalErrorHandler);

  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => {
    console.log(`Started server on port ${PORT}`);
  });
};
