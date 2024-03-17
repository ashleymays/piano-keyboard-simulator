import { catchErrors } from '@ashleymays/nodejs-utils';
import { getAudioSamplesForInstrument } from './services';

export const getAudio = catchErrors(async (req, res) => {
  const { instrument } = req.query as { instrument: string };
  const audioSamples = await getAudioSamplesForInstrument(instrument);
  res.status(200).json(audioSamples);
});
