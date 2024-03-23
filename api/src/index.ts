import express from 'express';
import cors from 'cors';
import { errorHandler } from './error-handler';
import { getAudioForInstrument } from './controller';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/audio', getAudioForInstrument);

app.use(errorHandler);

app.listen(8080);
