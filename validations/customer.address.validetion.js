const Joi = require("joi")

const validateCustomerAddress = (customerAddress) => {
    const schema = Joi.object({
        customer_id: Joi.number().min(1).max(50).required(),
        name: Joi.string().required(),
        country_id: Joi.number().min(1).max(50).required(),
        region_id: Joi.number().min(1).max(50).required(),
        distict_id: Joi.number().min(1).max(50).required(),
        street: Joi.string().required(),
        house: Joi.string().min(3).max(10).required(),
        flat_id: Joi.number().min(1).max(50).required(),
        location: Joi.string().required(),
        post_index: Joi.string().required(),
        info: Joi.string().required()
    })
    return schema.validate(customerAddress)
}

module.exports = { validateCustomerAddress }