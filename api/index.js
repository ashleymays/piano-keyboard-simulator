import express from 'express';
import cors from 'cors';
import path from 'path';
import { getAudio } from './get-audio.controller.js';
import { getDirname } from './utils.js';

const app = express();

app.use(express.static(path.join(getDirname(), '../client/build')));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/audio', getAudio);

app.listen(8080);
