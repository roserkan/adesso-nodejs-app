const Joi = require('joi');


const createValidation = Joi.object({
    roleName: Joi.string().required().min(2)
});

const updateValidation = Joi.object({
    roleName: Joi.string().required().min(2)
});



module.exports = {
    createValidation,
    updateValidation
}