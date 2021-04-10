const express = require('express');

const routes = require('./routes');
const errorHandlerMiddleware = require('./middlewares/errorHandler');
const loggerMiddleware = require('./middlewares/logger');

const port = process.env.PORT || 3000;

const startApp = () => {
  const app = express();

  app.get('/', (req, res) => {
    res.send('AoK!');
  });

  app.use(express.json());

  app.use(loggerMiddleware);

  app.use('/api/v1', routes);

  app.use(errorHandlerMiddleware);

  const server = app.listen(port, () => {
    console.log(`Listening on port ${server.address().port}...`);
  });
};

module.exports = startApp;
