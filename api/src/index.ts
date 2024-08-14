import 'dotenv/config';
import { app } from './app.ts';

const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;
const HOST = process.env.HOST || '127.0.0.1';

app.listen(PORT, HOST, () => {
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
