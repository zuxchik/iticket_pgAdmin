const Joi = require("joi")

const validateFlat = (flat) => {
    const schema = Joi.object({
        etaj: Joi.string().min(1).max(50).required(),
        nimdir: Joi.number().required()
    })
    return schema.validate(flat)
}

module.exports = { validateFlat }