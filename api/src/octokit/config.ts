import { Octokit } from '@octokit/rest';

export const octokit = new Octokit({
  retry: { enabled: false },
  auth: process.env.GITHUB_AUTH_TOKEN
});
