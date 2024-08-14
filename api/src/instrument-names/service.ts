import { fetchInstrumentData } from '~/lib/octokit/fetch-instrument-data.ts';

export const findInstrumentNames = async () => {
  const folders = await fetchInstrumentFolders();

  if (Array.isArray(folders)) {
    return folders.map((folder) => folder.name);
  }

  return [folders.name];
};

const fetchInstrumentFolders = async () => {
  const response = await fetchInstrumentData('/audio');

  return response.data;
};
