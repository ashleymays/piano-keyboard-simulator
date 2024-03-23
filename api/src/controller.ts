import { catchErrors } from '@ashleymays/nodejs-utils';
import { getAudioSamples } from './services';

export const getAudioForInstrument = catchErrors(async (req, res) => {
  const { instrument } = req.query as { instrument: string };
  const audioSamples = await getAudioSamples(instrument);
  res.status(200).json(audioSamples);
});
