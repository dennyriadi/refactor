const model = require('../../models/people');

function getPeople(req, res) {
  model.search(req.query)
    .then(coll => res.json(coll))
    .catch(err => {
      res.status = 500;
      console.error(err);
      res.json({ error: 'Unable to search people.' });
    });
}

module.exports = {
  getPeople,
};
