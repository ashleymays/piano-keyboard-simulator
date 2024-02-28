import express from 'express';
import cors from 'cors';
import { getAudio } from './get-audio.controller.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/audio', getAudio);

app.listen(8080);
