const Joi = require("joi")

const validateTickeType = (ticket_type) => {
    const schema = Joi.object({
        color: Joi.string().required(),
        name: Joi.string().min(12).max(14).required(),
        ticket: Joi.string().min(12).max(14).required()
    })
    return schema.validate(ticket_type)
}

module.exports = { validateTickeType }