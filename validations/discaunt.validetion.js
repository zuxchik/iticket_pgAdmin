const Joi = require("joi")

const validateDiscaunt = (discaunt) => {
    const schema = Joi.object({
        discount: Joi.string().min(12).max(20).required(),
        finish_date: Joi.date().min(12).max(20).required()
    })
    return schema.validate(discaunt)
}

module.exports = { validateDiscaunt }