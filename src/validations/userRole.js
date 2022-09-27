const Joi = require('joi');


const createValidation = Joi.object({
    name: Joi.string().required().min(3).max(50),
    user: Joi.string().required(),
    role: Joi.string().required(),
});

const updateValidation = Joi.object({
    name: Joi.string().required().min(3).max(50),
    user: Joi.string().required(),
    role: Joi.string().required(),
});



module.exports = {
    createValidation,
    updateValidation
}