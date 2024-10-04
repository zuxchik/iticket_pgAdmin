const Joi = require("joi")

const validateCustomerAddress = (customerAddress) => {
    const schema = Joi.object({
        customer_id: Joi.number().required(),
        name: Joi.string().required(),
        region_id: Joi.number().required(),
        district_id: Joi.number().required(),
        street: Joi.string().required(),
        house: Joi.string().min(3).max(10).required(),
        flat_id: Joi.number().required(),
        location: Joi.string().required(),
        post_index: Joi.string().required(),
        info: Joi.string().required()
    })
    return schema.validate(customerAddress)
}

module.exports = { validateCustomerAddress }