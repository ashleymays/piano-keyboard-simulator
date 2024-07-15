import { usePianoKeys } from './use-piano-keys';
import { useDocumentEventListener } from './use-document-event-listener';
import type { PianoKey as PianoKeyType } from '~/store/piano-keys';

export const PianoKeys = () => {
  const { pianoKeys, pressPianoKey, releasePianoKey } = usePianoKeys();

  useDocumentEventListener('keydown', pressPianoKey);
  useDocumentEventListener('keyup', releasePianoKey);

  return (
    <div
      className="piano-keys-wrapper"
      onMouseDown={pressPianoKey}
      onMouseUp={releasePianoKey}
      onMouseOver={releasePianoKey}
      onMouseOut={releasePianoKey}
    >
      {pianoKeys.map((pianoKey) => (
        <PianoKey
          key={pianoKey.id}
          {...pianoKey}
        />
      ))}
    </div>
  );
};

type PianoKeyProps = {
  id: PianoKeyType['id'];
  isPressed: PianoKeyType['isPressed'];
  type: PianoKeyType['type'];
};

const PianoKey = ({ id, isPressed, type }: PianoKeyProps) => {
  return (
    <button
      type="button"
      name="piano-key"
      value={id}
      aria-label={id}
      className={clsx(
        type === 'natural' ? 'piano-key--white' : 'piano-key--black',
        isPressed && 'pressed-piano-key'
      )}
    >
      {type === 'natural' && id}
    </button>
  );
};

const clsx = (...classNames: Array<string | boolean | null | undefined>) => {
  return classNames.filter(Boolean).join(' ');
};
