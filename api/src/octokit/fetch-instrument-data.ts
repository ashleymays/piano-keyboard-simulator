import { octokit } from './config.ts';

export const fetchInstrumentData = (path: string) => {
  return octokit.rest.repos.getContent({
    path,
    owner: 'ashleymays',
    repo: 'keyboard-instruments'
  });
};
