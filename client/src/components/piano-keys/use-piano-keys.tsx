import { useAppSelector } from '~/features/hooks';
import { usePianoKeyEvents } from './use-piano-key-events';

export const usePianoKeys = () => {
  const { onMouseDown, onMouseUp, onMouseOver, onMouseOut } =
    usePianoKeyEvents();

  const pianoKeys = useAppSelector((state) => state.pianoKeys);

  return {
    pianoKeys,
    onMouseDown,
    onMouseUp,
    onMouseOver,
    onMouseOut
  };
};
