import 'dotenv/config';
import { app } from './app.ts';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('uncaughtRejection', (error, origin) => {
  console.log(`Uncaught Rejection: ${error}`);
  console.log(`Origin: ${origin}`);

  process.exit(1);
});

process.on('uncaughtException', (error, origin) => {
  console.log(`Uncaught Exception: ${error}`);
  console.log(`Origin: ${origin}`);

  process.exit(1);
});
