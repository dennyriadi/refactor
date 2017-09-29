const Joi = require('joi');

module.exports = {
  getPeople: {
    query: {
      gender: Joi.string().valid('male', 'female'),
      age: Joi.number(),
      age_lt: Joi.number(),
      age_gt: Joi.number(),
    },
  },
};
