const Joi = require("joi")

const validetionVanue = (venue) => {
    const schema = Joi.object({
        name: Joi.string().min(4).max(20).required(),
        address: Joi.string().min(12).max(14).required(),
        location: Joi.string().min(12).max(14).required(),
        site: Joi.string().min(12).max(14).required(),
        phone: Joi.string().min(12).max(14).required(),
        venue_type_id: Joi.number().required(),
        schema: Joi.string().min(12).max(14).required(),
        region_id: Joi.number().required(),
        district_id: Joi.number().required()
    })
    return schema.validate(venue)
}

module.exports = { validetionVanue }