const R = require('ramda');
const express = require('express');
const pkg = require('../../package.json');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(R.pick(['name', 'version'])(pkg));
});

module.exports = router;
