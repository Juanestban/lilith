import { getJestProjects } from '@nrwl/jest';

// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
export default {
  projects: getJestProjects(),
  verbose: true,
};
