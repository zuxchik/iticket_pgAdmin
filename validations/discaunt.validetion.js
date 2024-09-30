const Joi = require("joi")

const validateDiscaunt = (discaunt) => {
    const schema = Joi.object({
        discount: Joi.number().max(20).required(),
        finish_date: Joi.date().required()
    })
    return schema.validate(discaunt)
}

module.exports = { validateDiscaunt }