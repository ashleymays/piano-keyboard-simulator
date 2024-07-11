import 'dotenv/config';
import process from 'node:process';
import { initApplication } from './app.ts';

initApplication();

process.on('uncaughtRejection', (error, promise) => {
  console.log(`Uncaught Rejection: ${error}`);
  process.exit(1);
});

process.on('uncaughtException', (error, promise) => {
  console.log(`Uncaught Exception: ${error}`);
  process.exit(1);
});
