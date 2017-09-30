const express = require('express');
const indexRoute = require('./routes/index');
const peopleRoute = require('./routes/people');
const logger = require('./logger');
const bunyanMiddleware = require('bunyan-middleware');

const log = logger('API');

const app = express();
app.use(bunyanMiddleware({ logger: log }));
app.use(express.static('./public'));
app.use('/api/', indexRoute);
app.use('/api/people', peopleRoute);

const port = 3000;

app.listen(port, () => {
  log.info(`API listening on: ${port}`);
});
