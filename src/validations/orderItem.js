const Joi = require('joi');


const createValidation = Joi.object({
    order: Joi.string().required(),
    product: Joi.string().required(),
    quantity: Joi.number().min(1)
});

const updateValidation = Joi.object({
  
});



module.exports = {
    createValidation,
    updateValidation
}