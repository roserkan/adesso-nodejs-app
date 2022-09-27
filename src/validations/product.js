const Joi = require('joi');


const createValidation = Joi.object({
    name: Joi.string().required().min(3),
    price: Joi.number().min(0).required(),
    stock: Joi.number().min(0).required(),
    categoryId: Joi.string().required()
});

const updateValidation = Joi.object({
    name: Joi.string().required().min(3),
    price: Joi.number().min(0),
    stock: Joi.number().min(0),
    categoryId: Joi.string()
});



module.exports = {
    createValidation,
    updateValidation
}