var fs = require('fs');
var morgan = require('morgan');
var path = require('path');

const logFilePath =
  process.env.LOG_FILE_PATH ||
  path.join(path.resolve(__dirname, '../..'), 'access.log');

// Create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(logFilePath, {
  flags: 'a',
});

const logger = morgan('combined', { stream: accessLogStream });

module.exports = logger;
