const Joi = require("joi")

const validateCustomerCart = (customercart) => {
    const schema = Joi.object({
        customer_id: Joi.number().min(1).max(50).required(),
        name: Joi.string().required(),
        phone: Joi.string().min(10).max(50).required(),
        number: Joi.string().required(),
        year: Joi.date().required(),
        month: Joi.date().required(),
        is_active: Joi.boolean().required(),
        is_main: Joi.boolean().required()
    })
    return schema.validate(customercart)
}

module.exports = { validateCustomerCart }