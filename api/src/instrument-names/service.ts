import { storage, repositoryConfig } from '~/octokit/config.ts';

export const findInstrumentNames = async () => {
  const folders = await fetchInstrumentFolders();

  if (Array.isArray(folders)) {
    return folders.map((folder) => folder.name);
  }

  return [folders.name];
};

const fetchInstrumentFolders = async () => {
  const response = await storage.getContent({
    path: '/audio',
    ...repositoryConfig
  });

  return response.data;
};
