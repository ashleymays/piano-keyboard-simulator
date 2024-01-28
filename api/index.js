import express from 'express';
import { getAudio } from './controller.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/audio', getAudio);

app.listen(8080);