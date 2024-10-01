const Joi = require("joi")

const validateStatus = (status) => {
    const schema = Joi.object({
        status: Joi.string().min(5).max(30).required()
    })
    return schema.validate(status)
}

module.exports = { validateStatus }