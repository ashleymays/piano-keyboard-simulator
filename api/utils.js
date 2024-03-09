import { fileURLToPath } from 'node:url';
import path from 'node:path';

/**
 * Returns the path to the current directory.
 * Needed since ES modules don't have a global "_dirname" variable.
 *
 * @returns {string}
 */
export function getDirname() {
  const __filename = fileURLToPath(import.meta.url);
  return path.dirname(__filename);
}
