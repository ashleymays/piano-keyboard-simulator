import { describe, it } from 'node:test';
import request from 'supertest';
import { app } from '../app.ts';

describe('GET /api/v2/instruments', () => {
  it('returns valid json', () => {
    request(app)
      .get('/api/v2/instruments')
      .expect('Content-Type', 'application/json')
      .end((error) => {
        if (error) throw error;
      });
  });

  it('returns status 200', () => {
    request(app)
      .get('/api/v2/instruments')
      .expect(200)
      .end((error) => {
        if (error) throw error;
      });
  });

  it('returns an array of strings', () => {
    request(app)
      .get('/api/v2/instruments')
      .expect((res) => typeof res.body.data === 'object')
      .expect((res) => typeof res.body.data.length !== 'undefined')
      .expect((res) => typeof res.body.data[0] === 'string')
      .end((error) => {
        if (error) throw error;
      });
  });
});
