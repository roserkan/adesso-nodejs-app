const Joi = require('joi');


const createValidation = Joi.object({
    emailAddress: Joi.string().required(),
    password: Joi.string().min(6).max(24).required()
});

const updateValidation = Joi.object({
    emailAddress: Joi.string(),
    password: Joi.string().min(6).max(24)
});



module.exports = {
    createValidation,
    updateValidation
}