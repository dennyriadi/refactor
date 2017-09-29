const R = require('ramda');
const db = require('../db');

const parseAge = params => {
  if (params.age) {
    return { age: +params.age };
  }

  if (params.age_lt) {
    return { age: { $lt: +params.age_lt } };
  }

  if (params.age_gt) {
    return { age: { $gt: +params.age_gt } };
  }

  return null;
};

function search(params) {
  const queryParams = params ?
    R.mergeAll([
      {},
      params.gender ? { gender: params.gender } : null,
      parseAge(params),
    ])
    : {};


  return new Promise(
    (resolve, reject) => {
      db.find(queryParams, (err, data) => err ? reject(err) : resolve(data));
    });
}

module.exports = {
  search,
};
