const request = require('supertest');
const app = require('../../src/server');

describe('services records getrecords', () => {
  test('should it fetch records from mongoose', async () => {
    const records = await request(app)
      .get('/api/records')
      .query({
        startDate: '2016-01-26', endDate: '2018-02-02', minCount: '2700', maxCount: '3000'
      });
    expect(records.body.code).toBe(0);
    expect(records.body.msg).toBe('Success');
  });
});
