import { Router } from 'express';
import * as controllers from './controllers.ts';

export const appRouter = Router();

appRouter.get('/instruments', controllers.getInstrumentNames);
appRouter.get('/instruments/:name/audio', controllers.getInstrumentAudio);
