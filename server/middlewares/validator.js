const userSchema = require('../validators/user.validator');
const BadRequestException = require('../utils/errors/BadRequestException');
const InternalServerException = require('../utils/errors/InternalServerException');

const validationMiddleware = (schemaName, req, res, next) => {
  let error;
  let value;
  switch (schemaName) {
    case 'user':
      ({ error, value } = userSchema.validate(req.body));
      break;
    default:
      error = new InternalServerException('No validation schema provided');
      break;
  }
  if (error) {
    throw new BadRequestException(error.message);
  }
  req.body = value;
  next();
};

module.exports = validationMiddleware;
