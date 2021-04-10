const InternalServerException = require('../utils/errors/InternalServerException');

const errorHandlerMiddleware = (error, req, res, next) => {
  if (res.headersSent) {
    next(error);
  } else {
    if (!error.statusCode) {
      error = new InternalServerException(
        process.env.NODE_ENV !== 'production' ? error.message : null
      );
    }
    res.status(error.statusCode).send(error.body);
  }
};

module.exports = errorHandlerMiddleware;
