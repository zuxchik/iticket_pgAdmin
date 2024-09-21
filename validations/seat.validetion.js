const Joi = require("joi")

const validateSeat = (seat) => {
    const schema = Joi.object({
        sector: Joi.string().min(4).max(20).required(),
        row_number: Joi.string().min(12).max(14).required(),
        number: Joi.string().min(12).max(14).required(),
        venue_id: Joi.string().required(),
        is_creator: Joi.string().required(),
        location_in_schema: Joi.string().required()
    })
    return schema.validate(seat)
}

module.exports = { validateSeat }