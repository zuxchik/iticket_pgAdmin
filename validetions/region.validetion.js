const Joi = require("joi")

const validateRegion = (region) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        postpone: Joi.string().min(12).max(14).required(),
    })
    return schema.validate(region)
}

module.exports = { validateRegion }