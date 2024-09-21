const Joi = require("joi")

const validateSeatType = (seat_type) => {
    const schema = Joi.object({
        name: Joi.string().min(4).max(20).required()
    })
    return schema.validate(seat_type)
}

module.exports = { validateSeatType }