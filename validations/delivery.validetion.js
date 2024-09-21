const Joi = require("joi")

const validateDelivery = (dilevery) => {
    const schema = Joi.object({
        name: Joi.string().min(4).max(20).required()
    })
    return schema.validate(dilevery)
}

module.exports = { validateDelivery }