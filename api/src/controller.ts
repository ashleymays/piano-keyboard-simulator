import { getAudioFromFilesystem } from './helpers';
import type { Request, Response } from 'express';
import type { AudioMap } from './types/audio-map';

export const getAudio = async (req: Request, res: Response): Promise<void> => {
  try {
    const { instrument } = req.query as { instrument: string };
    const audioMap: AudioMap = await getAudioFromFilesystem(instrument);

    if (Object.keys(audioMap).length === 0) {
      throw new Error('Could not get audio');
    }

    res.status(200).json(audioMap);
  } catch (error: any) {
    res.status(error.statusCode || 500).json(error);
  }
};
