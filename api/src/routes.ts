import { Router } from 'express';
import { getAudioSamples } from './audio-samples/controller.ts';
import { getInstrumentNames } from './instrument-names/controller.ts';

const appRoutes = Router();

appRoutes.get('/instruments', getInstrumentNames);
appRoutes.get('/instruments/:instrumentName/audio', getAudioSamples);

export const routes = Router().use('/api/v2', appRoutes);
