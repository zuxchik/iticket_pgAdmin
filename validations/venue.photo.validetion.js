const Joi = require("joi")

const validateVenuePhoto = (Venuephoto) => {
    const schema = Joi.object({
        venue_id: Joi.number().required(),
        url: Joi.string().required()
    })
    return schema.validate(Venuephoto)
}

module.exports = { validateVenuePhoto }