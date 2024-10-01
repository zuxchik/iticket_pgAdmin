const Joi = require("joi")

const validateSeat = (seat) => {
    const schema = Joi.object({
        sector_id: Joi.number().required(),
        row_number: Joi.string().required(),
        number: Joi.string().required(),
        venue_id: Joi.number().required(),
        seat_type_id: Joi.number().required()
    })
    return schema.validate(seat)
}

module.exports = { validateSeat }