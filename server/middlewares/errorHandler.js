const InternalServerException = require('../utils/errors/InternalServerException');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (res.headersSent) {
    next(err);
  } else {
    const error = err.statusCode ? err : new InternalServerException(
      process.env.NODE_ENV !== 'production' ? err.message : null,
    );
    res.status(error.statusCode).send(error.body);
  }
};

module.exports = errorHandlerMiddleware;
