const path = require('path');
const Datastore = require('nedb');

const db = new Datastore({
  filename: path.join(__dirname, 'db.json'),
  autoload: true,
});

module.exports = db;
