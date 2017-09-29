const express = require('express');
const indexRoute = require('./routes/index');
const peopleRoute = require('./routes/people');

const app = express();
app.use(express.static('./public'));
app.use('/api/', indexRoute);
app.use('/api/people', peopleRoute);

const port = 8081;

app.listen(port, () => {
  console.info(`API listening on: ${port}`);
});
