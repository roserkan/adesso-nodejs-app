const Joi = require('joi');


const createValidation = Joi.object({
    firstName: Joi.string().required().min(3).max(24),
    lastName: Joi.string().required().min(3).max(24),
    address: Joi.string(),
    userId: Joi.string().required()
});

const updateValidation = Joi.object({
    firstName: Joi.string().min(3).max(24),
    lastName: Joi.string().min(3).max(24),
    address: Joi.string(),
    userId: Joi.string().required()
});



module.exports = {
    createValidation,
    updateValidation
}