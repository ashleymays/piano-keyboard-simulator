import { Router } from 'express';
import { addDispatch } from './middleware/add-dispatch.ts';
import { getInstrumentAudio } from './instrument-audio/controller.ts';
import { getInstrumentNames } from './instrument-names/controller.ts';

const appRoutes = Router();

appRoutes.get('/instruments', addDispatch, getInstrumentNames);
appRoutes.get('/instruments/:name/audio', addDispatch, getInstrumentAudio);

export const routes = Router().use('/api/v2', appRoutes);
