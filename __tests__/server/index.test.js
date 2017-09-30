const mockedResult = [
  { name: 'John', age: 25 },
];

const mockedPeopleModel = {
  search: jest.fn(params => new Promise((resolve, reject) => {
    if (params.age_lt) {
      reject('Mocked error');
    } else {
      resolve(mockedResult);
    }
  })),
};

const mockedLogger = jest.fn(() => ({
  info: jest.fn(),
  error: jest.fn(),
}));

jest.mock('../../server/logger', () => mockedLogger);
jest.mock('../../server/models/people', () => mockedPeopleModel);

const express = require('express');
const request = require('supertest');
const PeopleRoute = require('../../server/routes/people');

const app = express();
const endpoint = '/api/people';
app.use(endpoint, PeopleRoute);
const server = app.listen();

describe('People API endpoint', () => {
  afterAll((done) => {
    server.close(done);
  });

  test('should return 400 if gender is unknown', () =>
    request(server)
      .get(`${endpoint}?gender=unknown`)
      .expect(400)
  );

  test('should return 400 if age is a string', () =>
    request(server)
      .get(`${endpoint}?age=unknown`)
      .expect(400)
  );

  test('should return 400 if age_gt is a string', () =>
    request(server)
      .get(`${endpoint}?age_gt=unknown`)
      .expect(400)
  );

  test('should return 500 if age_lt param is used', () =>
    request(server)
      .get(`${endpoint}?age_lt=50`)
      .expect(500)
  );

  test('should return 200 if valid gender and age_gt params are used', () =>
    request(server)
      .get(`${endpoint}?gender=male&age_gt=20`)
      .expect(200, mockedResult)
  );
});
