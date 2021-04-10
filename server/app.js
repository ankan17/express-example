const express = require('express');

const port = process.env.PORT || 3000;

const startApp = () => {
  const app = express();

  app.get('/', (req, res) => {
    res.send('AoK!');
  });

  const server = app.listen(port, () => {
    console.log(`Listening on port ${server.address().port}...`);
  });
};

module.exports = startApp;
