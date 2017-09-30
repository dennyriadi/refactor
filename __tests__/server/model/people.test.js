
jest.mock('../../../server/db');

const db = require('../../../server/db');
const peopleModel = require('../../../server/models/people');

describe('PeopleModel', () => {
  test('should be able to search without any parameters', () => {
    peopleModel.search();
    expect(db.find).toBeCalledWith({}, expect.anything());
  });

  test('should be able to search using gender filter', () => {
    const filter = { gender: 'male' };
    peopleModel.search(filter);
    expect(db.find).toBeCalledWith(filter, expect.anything());
  });

  test('should be able to search using gender and age filters', () => {
    const filter = { gender: 'male', age: 4 };
    peopleModel.search(filter);
    expect(db.find).toBeCalledWith(filter, expect.anything());
  });

  test('should be able to search using age less than filter', () => {
    const filter = { age_lt: 4 };
    peopleModel.search(filter);
    const expectedResult = { age: { $lt: filter.age_lt } };
    expect(db.find).toBeCalledWith(expectedResult, expect.anything());
  });

  test('should be able to search using age greater than and gender filters', () => {
    const filter = { age_gt: 40, gender: 'female' };
    peopleModel.search(filter);
    const expectedResult = {
      age: { $gt: filter.age_gt },
      gender: filter.gender,
    };
    expect(db.find).toBeCalledWith(expectedResult, expect.anything());
  });
});
