const Joi = require("joi")

const validatePayment = (payment) => {
    const schema = Joi.object({
        name: Joi.number().min(50000).max(10000000).required()
    })
    return schema.validate(payment)
}

module.exports = { validatePayment }