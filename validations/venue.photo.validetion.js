const Joi = require("joi")

const validetionVenuePhoto = (Venuephoto) => {
    const schema = Joi.object({
        venue_id: Joi.number().required(),
        url: Joi.string().required()
    })
    return schema.validate(Venuephoto)
}

module.exports = { validetionVenuePhoto }