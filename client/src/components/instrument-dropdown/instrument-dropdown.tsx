import { useEffect } from 'react';
import Dropdown from 'react-dropdown';
import { toast } from 'react-hot-toast';
import { UpArrowIcon, DownArrowIcon } from '~/components/arrow-icon';
import { useInstrumentNames } from '~/hooks/use-instrument-names';
import { useAudioSamples } from '~/hooks/use-audio-samples';

export const InstrumentDropdown = () => {
  const { instruments, loadInstrumentNames } = useInstrumentNames();
  const { loadAudio } = useAudioSamples();

  useEffect(() => {
    const init = async () => {
      const initializedInstruments = await loadInstrumentNames();
      await loadAudio(initializedInstruments[0]);
    };

    toast.promise(init(), {
      loading: 'Initializing app...',
      success: 'Initialized successfully',
      error: 'Something went wrong. Please reload the page and try again.'
    });
  }, []);

  return (
    <Dropdown
      options={createDropdownOptions(instruments)}
      value={instruments[0]}
      className="instrument-dropdown"
      controlClassName="instrument-dropdown__selected"
      menuClassName="instrument-dropdown__options"
      arrowClosed={<DownArrowIcon />}
      arrowOpen={<UpArrowIcon />}
      onChange={({ value }) =>
        toast.promise(loadAudio(value), {
          loading: 'Loading audio...',
          success: 'Audio loaded successfully',
          error: 'Something went wrong loading the audio.'
        })
      }
    />
  );
};

const createDropdownOptions = (instruments: string[]) => {
  return instruments.map((instrument) => ({
    value: instrument,
    label: instrument,
    className: 'instrument-dropdown__option'
  }));
};
