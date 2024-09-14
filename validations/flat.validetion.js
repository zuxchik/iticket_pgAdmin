const Joi = require("joi")

const validateFlat = (flat) => {
    const schema = Joi.object({
        etaj: Joi.string().min(1).max(50).required(),
        condiition: Joi.string().min(12).max(14).required()
    })
    return schema.validate(flat)
}

module.exports = { validateFlat }