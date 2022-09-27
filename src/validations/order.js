const Joi = require('joi');


const createValidation = Joi.object({
    user: Joi.string().required(),
    orderItems: Joi.array().required(),
    total: Joi.number().required().min(0),
    orderDate: Joi.date().required()
});

const updateValidation = Joi.object({
    
});



module.exports = {
    createValidation,
    updateValidation
}