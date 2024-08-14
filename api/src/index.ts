import 'dotenv/config';
import process from 'node:process';
import { app } from './app.ts';

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`);
});

process.on('uncaughtRejection', (error, promise) => {
  console.log(`Uncaught Rejection: ${error}`);
  process.exit(1);
});

process.on('uncaughtException', (error, promise) => {
  console.log(`Uncaught Exception: ${error}`);
  process.exit(1);
});
