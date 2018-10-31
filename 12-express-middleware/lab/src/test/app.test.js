import request from 'supertest';
const { app } = require('../app.js');

let testId1;

beforeAll(() => {
  request(app)
    .post('/api/v1/calendar')
    .send({month:'October', date:'28'})
    .then(response => {
      testId1 = response.body.id;
    });
});

afterAll(() => {
  request(app)
    .delete('/api/v1/calendar/' + testId1)
    .then(() => {
      console.log('Test file 1 deleted');
    });
});

describe('Calendar App Tests', () => {
  it('should return a status code of 404 for routes that have not been registered', (done) => {
    request(app)
      .patch('/api/v1/calendar')
      .then(response => {
        expect(response.res.statusCode).toBe(404);
        expect(response.res.statusMessage).toBe('Route Not Found');
        done();
      });
  });
  it('GET: should return a status code of 404 and a status message of Not Found for valid requests made with an id that was not found', (done) => {
    request(app)
      .get('/api/v1/calendar/123')
      .then(response => {
        expect(response.res.statusCode).toBe(404);
        expect(response.res.statusMessage).toBe('Not Found');
        done();
      });
  });
  it('GET: should return a status code of 400 and a status message of Bad Request if no id was provided in the request', (done) => {
    request(app)
      .get('/api/v1/calendar')
      .then(response => {
        expect(response.res.statusCode).toBe(400);
        expect(response.res.statusMessage).toBe('Bad Request');
        done();
      });
  });
  it('GET: should return a status code of 200 and a response body for a request made with a valid id', (done) => {
    request(app)
      .get('/api/v1/calendar/' + testId1)
      .then(response => {
        expect(response.res.statusCode).toBe(200);
        expect(response.body.id).toBe(testId1);
        expect(response.body.createdOn).toBeDefined();
        expect(response.body.month).toEqual('October');
        expect(response.body.date).toEqual('28');
        done();
      });
  });
  it('POST: should return a status code of 400 and a status message of Bad Request if no request body was provided', (done) => {
    request(app)
      .post('/api/v1/calendar')
      .send()
      .then(response => {
        expect(response.res.statusCode).toBe(400);
        expect(response.res.statusMessage).toBe('Bad Request');
        done();
      });
  });

  let testId2;

  it('POST: should return a status code of 200 and the body content for a post request with a valid body', (done) => {
    request(app)
      .post('/api/v1/calendar')
      .send({month:'October', date:'29'})
      .then(response => {
        testId2 = response.body.id;
        expect(response.res.statusCode).toBe(200);
        expect(response.body.id).toBe(testId2);
        expect(response.body.createdOn).toBeDefined();
        expect(response.body.month).toEqual('October');
        expect(response.body.date).toEqual('29');
        done();
      });
  });
  it('DELETE: should return a status code of 204 and no content in the body', (done) => {
    request(app)
      .delete('/api/v1/calendar/' + testId2)
      .then(response => {
        expect(response.res.statusCode).toBe(204);
        expect(Object.keys(response.body).length).toBe(0);
        console.log('Test file 2 deleted');
        done();
      });
  });

  it('PUT: should return a status code of 400 and a status message of Bad Request if no request body was provided', (done) => {
    request(app)
      .put('/api/v1/calendar/' + testId1)
      .send()
      .then(response => {
        expect(response.res.statusCode).toBe(400);
        expect(response.res.statusMessage).toBe('Bad Request');
        done();
      });
  });
  it('PUT: should return a status code of 404 and a status message of Not Found for valid requests made with an id that was not found', (done) => {
    request(app)
      .put('/api/v1/calendar/456')
      .send({month:'October', date:'30'})
      .then(response => {
        expect(response.res.statusCode).toBe(404);
        expect(response.res.statusMessage).toBe('Not Found');
        done();
      });
  });
  it('PUT: should return a status code of 400 and a status message of Bad Request if no id was provided in the request', (done) => {
    request(app)
      .put('/api/v1/calendar')
      .send({month:'October', date:'30'})
      .then(response => {
        expect(response.res.statusCode).toBe(400);
        expect(response.res.statusMessage).toBe('Bad Request');
        done();
      });
  });
  it('PUT: should return a status code of 200 and the body content for a put request with a valid body', (done) => {
    request(app)
      .put('/api/v1/calendar/' + testId1)
      .send({month:'October', date:'31'})
      .then(response => {
        expect(response.res.statusCode).toBe(200);
        expect(response.body.id).toBe(testId1);
        expect(response.body.createdOn).toBeDefined();
        expect(response.body.month).toEqual('October');
        expect(response.body.date).toEqual('31');
        done();
      });
  });
});
