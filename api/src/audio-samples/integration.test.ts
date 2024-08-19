import { describe, it } from 'node:test';
import request from 'supertest';
import { app } from '../app.ts';

const validInstrumentName = 'Acoustic Grand';
const correctEndpoint = `/api/v2/instruments/${validInstrumentName}/audio`;

const invalidInstrumentName = 'testing';
const incorrectEndpoint = `/api/v2/instruments/${invalidInstrumentName}/audio`;

describe('GET /api/v2/instruments/:name/audio', () => {
  it('returns valid json for correct input', () => {
    request(app)
      .get(correctEndpoint)
      .expect('Content-Type', 'application/json')
      .end((error) => {
        if (error) throw error;
      });
  });

  it('returns valid json for incorrect input', () => {
    request(app)
      .get(incorrectEndpoint)
      .expect('Content-Type', 'application/json')
      .end((error) => {
        if (error) throw error;
      });
  });

  it('returns an object with property `data` for correct input', () => {
    request(app)
      .get(correctEndpoint)
      .expect((res) => res.body.hasOwnProperty('data'))
      .end((error) => {
        if (error) throw error;
      });
  });

  it('returns an object with property `error` for incorrect input', () => {
    request(app)
      .get(correctEndpoint)
      .expect((res) => res.body.hasOwnProperty('error'))
      .end((error) => {
        if (error) throw error;
      });
  });

  it('returns status 200 for correct input', () => {
    request(app)
      .get(correctEndpoint)
      .expect(200)
      .end((error) => {
        if (error) throw error;
      });
  });

  it('returns status 404 for incorrect input', () => {
    request(app)
      .get(incorrectEndpoint)
      .expect(404)
      .end((error) => {
        if (error) throw error;
      });
  });

  it('returns an object with 84 keys for correct input', () => {
    request(app)
      .get('/api/v2/instruments')
      .expect((res) => typeof res.body.data === 'object')
      .expect((res) => {
        const audioSamples = res.body.data;
        const pitches = Object.keys(audioSamples);

        return pitches.length === 84;
      })
      .end((error) => {
        if (error) throw error;
      });
  });
});
