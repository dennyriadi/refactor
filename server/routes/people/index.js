const express = require('express');
const validate = require('express-validation');
const validation = require('./validation');
const service = require('./service');

const router = express.Router();
router.get('/', validate(validation.getPeople), service.getPeople);

module.exports = router;
