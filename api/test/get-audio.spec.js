import { describe, it } from 'mocha';
import * as tests from './get-audio.test.js';

describe('get audio', () => {
  it('should respond with OK status for valid directory', tests.okStatusForValidDirectory)
  
  it('should respond with server error status for missing directory', tests.internalServerErrorStatusForMissingDirectory)

  it('should respond with server error status for wrong directory', tests.internalServerErrorStatusForWrongDirectory)
})