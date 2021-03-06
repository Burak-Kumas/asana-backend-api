const Joi = require("joi");

const createValidation = Joi.object({
  name: Joi.string().required().min(5).trim(),
});

const updateValidation = Joi.object({
  name: Joi.string().required().min(5).trim(),
});

module.exports = {
  createValidation,
  updateValidation
};
