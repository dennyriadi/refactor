const bunyan = require('bunyan');

module.exports = name => bunyan.createLogger({
  name,
  level: 'INFO',
  streams: [
    { stream: process.stdout },
    { path: 'log.out' },
  ],
});
