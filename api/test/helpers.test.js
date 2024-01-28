import { describe, it } from 'mocha';
import * as baseChai from 'chai';
import chaiHttp from 'chai-http';

const chai = baseChai.use(chaiHttp);

describe('get audio', () => {
  it('should respond with OK status for valid directory', () => {
    chai
      .request('http://localhost:8080')
      .get('/audio?instrument=acoustic-grand')
      .end((error, response) => {
        if (error) {
          throw error;
        }
        chai.expect(response).to.have.status(200);
    })
  })
  
  it('should respond with server error status for missing directory', () => {
    chai
      .request('http://localhost:8080')
      .get('/audio')
      .end((error, response) => {
        if (error) {
          throw error;
        }
        chai.expect(response).to.have.status(500);
    })
  })

  it('should respond with server error status for wrong directory', () => {
    chai
      .request('http://localhost:8080')
      .get('/audio?instrument=asjfalefubqeuofbq')
      .end((error, response) => {
        if (error) {
          throw error;
        }
        chai.expect(response).to.have.status(500);
    })
  })
})