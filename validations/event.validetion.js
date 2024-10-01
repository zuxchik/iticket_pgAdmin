const Joi = require("joi")

const validateEvent = (event) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(20).required(),
        address: Joi.string().max(20).required(),
        location: Joi.string().required(),
        site: Joi.string().required(),
        phone: Joi.string().required(),
        venue_type_id: Joi.number().required(),
        schema: Joi.string().max(20).required(),
        region_id: Joi.number().required(),
        district_id: Joi.number().required()
    })
    return schema.validate(event)
}

module.exports = { validateEvent }