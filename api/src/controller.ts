import { catchErrors, GeneralError } from '@ashleymays/nodejs-utils';
import { getAudioSamplesForInstrument } from './helpers';

export const getAudio = catchErrors(async (req, res) => {
  const { instrument } = req.query as { instrument: string };
  const audioSamples = await getAudioSamplesForInstrument(instrument);

  if (Object.keys(audioSamples).length === 0) {
    throw new GeneralError('Could not get audio samples');
  }

  res.status(200).json(audioSamples);
});
