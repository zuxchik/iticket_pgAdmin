const Joi = require("joi")

const validateTickeType = (ticket_type) => {
    const schema = Joi.object({
        color: Joi.string().required(),
        name: Joi.string().required(),
        ticket: Joi.string().required()
    })
    return schema.validate(ticket_type)
}

module.exports = { validateTickeType }