const Joi = require("joi")

const validateleng = (lenguage) => {
    const schema = Joi.object({
        language: Joi.string().min(5).max(20).required(),
        description: Joi.string().min(5).max(20).required()
    })
    return schema.validate(lenguage)
}

module.exports = { validateleng }