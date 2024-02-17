import * as baseChai from 'chai';
import chaiHttp from 'chai-http';

const chai = baseChai.use(chaiHttp);
const request = chai.request;
const expect = chai.expect;

export const okStatusForValidDirectory = (done) => {
  request('http://localhost:8080')
    .get('/audio?instrument=acoustic-grand')
    .end((error, response) => {
      expect(error).to.be.null;
      expect(response).to.have.status(200);
      done();
  })
}

export const internalServerErrorStatusForMissingDirectory = (done) => {
  request('http://localhost:8080')
    .get('/audio')
    .end((error, response) => {
      expect(error).to.be.null;
      expect(response).to.have.status(500);
      done();
  })
}

export const internalServerErrorStatusForWrongDirectory = (done) => {
  request('http://localhost:8080')
    .get('/audio?instrument=asjfalefubqeuofbq')
    .end((error, response) => {
      expect(error).to.be.null;
      expect(response).to.have.status(500);
      done();
  })
}