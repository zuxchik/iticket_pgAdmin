const Joi = require("joi")

const validateVenuePhoto = (Venuephoto) => {
    const schema = Joi.object({
        venue_id: Joi.string().required(),
        url: Joi.string().min(10).max(30).required()
    })
    return schema.validate(Venuephoto)
}

module.exports = { validateVenuePhoto }