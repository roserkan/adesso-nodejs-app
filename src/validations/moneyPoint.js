const Joi = require('joi');


const createValidation = Joi.object({
    point: Joi.number().required().min(0).max(100)
});

const updateValidation = Joi.object({
    _id: Joi.string().required(),
    point: Joi.number().required().min(0).max(100)
});



module.exports = {
    createValidation,
    updateValidation
}