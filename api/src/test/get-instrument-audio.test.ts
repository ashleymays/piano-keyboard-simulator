import { describe, it } from 'node:test';
import request from 'supertest';
import { app } from '../app.ts';

const validInstrumentName = 'Acoustic Grand';
const correctPath = `/api/v2/instruments${validInstrumentName}/audio`;

const invalidInstrumentName = 'testing';
const incorrectPath = `/api/v2/instruments${invalidInstrumentName}/audio`;

describe('GET /api/v2/instruments/:name/audio', () => {
  it('returns valid json for correct input', () => {
    request(app)
      .get(correctPath)
      .expect('Content-Type', 'application/json')
      .end((error) => {
        if (error) throw error;
      });
  });

  it('returns valid json for incorrect input', () => {
    request(app)
      .get(incorrectPath)
      .expect('Content-Type', 'application/json')
      .end((error) => {
        if (error) throw error;
      });
  });

  it('returns status 200 for correct input', () => {
    request(app)
      .get(correctPath)
      .expect(200)
      .end((error) => {
        if (error) throw error;
      });
  });

  it('returns status 404 for incorrect input', () => {
    request(app)
      .get(correctPath)
      .expect(incorrectPath)
      .end((error) => {
        if (error) throw error;
      });
  });

  it('returns an object with 84 keys for correct input', () => {
    request(app)
      .get('/api/v2/instruments')
      .expect((res) => typeof res.body.data === 'object')
      .expect((res) => {
        const audioMap = res.body.data;
        return Object.keys(audioMap).length === 84;
      })
      .end((error) => {
        if (error) throw error;
      });
  });
});
