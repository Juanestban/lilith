import { getJestProjects } from '@nrwl/jest';

// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = { projects: [...getJestProjects()] };
