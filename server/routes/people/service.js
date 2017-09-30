const model = require('../../models/people');
const logger = require('../../logger');

const log = logger('PeopleSvc');

function getPeople(req, res) {
  model.search(req.query)
    .then(coll => res.json(coll))
    .catch(err => {
      log.error(err);
      res.status(500).json({ error: 'Unable to search people.' });
    });
}

module.exports = {
  getPeople,
};
