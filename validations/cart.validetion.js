const Joi = require("joi")

const validateCart = (cart) => {
    const schema = Joi.object({
        ticket_id: Joi.string().required(),
        customer_id: Joi.string().min(12).max(14).required(),
        createdAt: Joi.string().required(),
        fineshedAt: Joi.string().required(),
        status_id: Joi.string().required()
    })
    return schema.validate(cart)
}

module.exports = { validateCart }