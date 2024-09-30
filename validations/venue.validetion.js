const Joi = require("joi")

const validetionVanue = (venue) => {
    const schema = Joi.object({
        name: Joi.string().min(4).max(20).required(),
        address: Joi.string().required(),
        location: Joi.string().required(),
        site: Joi.string().required(),
        phone: Joi.string().required(),
        venue_type_id: Joi.number().required(),
        schema: Joi.string().required(),
        region_id: Joi.number().required(),
        district_id: Joi.number().required()
    })
    return schema.validate(venue)
}

module.exports = { validetionVanue }