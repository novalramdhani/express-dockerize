const request = require('supertest');
const app = require('../src/app');

describe('GET root path', function() {
    it('response with json format', function(done) {
      request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});