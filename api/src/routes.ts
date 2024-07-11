import { Router } from 'express';
import { getInstrumentAudio } from './instrument-audio/controller.ts';
import { getInstrumentNames } from './instrument-names/controller.ts';

export const appRouter = Router();

appRouter.get('/instruments', getInstrumentNames);
appRouter.get('/instruments/:name/audio', getInstrumentAudio);
