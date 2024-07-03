import { useAppSelector } from '~/features/hooks';
import { usePianoKeyInputs } from './use-piano-key-inputs';

export const usePianoKeys = () => {
  const { onPianoKeyPress, onPianoKeyRelease } = usePianoKeyInputs();
  const pianoKeys = useAppSelector((state) => state.pianoKeys);

  return { pianoKeys, onPianoKeyPress, onPianoKeyRelease };
};
