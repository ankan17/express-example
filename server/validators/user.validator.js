const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .pattern(new RegExp('^[a-zA-Z ]{3,30}$'))
    .required(),
  age: Joi.number().min(1).max(120).required(),
  email: Joi.string().email(),
});

module.exports = userSchema;
