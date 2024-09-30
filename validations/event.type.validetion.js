const Joi = require("joi")

const validateEventType = (eventType) => {
    const schema = Joi.object({
        name: Joi.string().max(20).required()
    })
    return schema.validate(eventType)
}

module.exports = { validateEventType }