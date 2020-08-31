const mockingoose = require('mockingoose').default;
const { getRecords } = require('../../src/services/recordService');
const recordModel = require('../../src/models/recordModel');

describe('services records getrecords', () => {
  test('should it fetch records from mongoose', async () => {
    mockingoose(recordModel.model).toReturn([
      {
        key: 'HmsYvNTB', createdAt: '2016-06-12T21:50:44.088Z', totalCount: 2917
      },
      {
        key: 'jOjBYTLV', createdAt: '2016-11-13T19:54:23.677Z', totalCount: 2954
      }
    ], 'aggregate');

    const records = await getRecords({
      startDate: '2016-01-26', endDate: '2018-02-02', minCount: '2700', maxCount: '3000'
    });

    expect(records.length).toBe(2);
    expect(records[0].key).toBe('HmsYvNTB');
    expect(records[1].key).toBe('jOjBYTLV');
  });
});
