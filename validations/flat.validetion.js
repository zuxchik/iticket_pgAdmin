const Joi = require("joi")

const validateFlat = (flat) => {
    const schema = Joi.object({
        etaj: Joi.number().min(1).max(50).required(),
        condition: Joi.string().min(1).max(10)
    })
    return schema.validate(flat)
    
}

module.exports = { validateFlat }