import { Octokit } from 'octokit';

const octokit = new Octokit({
  retry: { enabled: false },
  auth: process.env.GITHUB_AUTH_TOKEN
});

export const storage = octokit.rest.repos;

export const repositoryConfig = {
  owner: 'ashleymays',
  repo: 'piano-keyboard-audio'
};
