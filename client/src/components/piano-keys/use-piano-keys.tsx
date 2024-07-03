import { useAppSelector } from '~/features/hooks';
import { usePianoKeyEvents } from './use-piano-key-events';

export const usePianoKeys = () => {
  const { onPianoKeyPress, onPianoKeyRelease } = usePianoKeyEvents();
  const pianoKeys = useAppSelector((state) => state.pianoKeys);

  return { pianoKeys, onPianoKeyPress, onPianoKeyRelease };
};
